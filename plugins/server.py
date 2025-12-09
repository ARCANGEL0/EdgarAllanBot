from bingart import BingArt
import json
import subprocess
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
import threading
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import aiohttp
import asyncio
# import required modules

from PyPDF2 import PdfReader
import sys
# chat gpt 3.5 request
import requests
import json

import whisper
import os
import time
class RequestHandler(BaseHTTPRequestHandler):
    def _set_headers(self, status_code=200):
        self.send_response(status_code)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode('utf-8'))

        print("Received POST request with data:", data)

        endpoint = self.path  # Get the requested endpoint
        print("Requested endpoint:", endpoint)

        if endpoint == "/sqlmap":
            url = data.get('url')
            optional_args = data.get('optional_args', '').split()
            
            if '--tor' not in optional_args:
                optional_args.append('--tor')
            if '--batch' not in optional_args:
                optional_args.append('--batch')

            print("URL:", url)
            print("Optional args:", optional_args)

            sqlmap_command = ['sqlmap', '-u', url] + optional_args
            print("Executing SQLMap command:", sqlmap_command)

            try:
                process = subprocess.Popen(sqlmap_command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                self._set_headers()
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
                    time.sleep(0.1)  # Add a small delay to simulate real-time output
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/write":
          
            texto = data.get('texto')
            print("texto:", texto)
          
            # Run as hidden window; Run in background sss
            CHROMEDRIVER_PATH = '/usr/bin/chromedriver'
            chrome_options = Options()
            chrome_options.add_argument("--headless")
            chrome_options.binary_location = CHROMEDRIVER_PATH  # Specify Chrome binary location
            driver = webdriver.Chrome(options=chrome_options)
            
            # Accessing the online app
            driver.get('https://saurabhdaware.github.io/text-to-handwriting/')
            
            try:
                # Wait for the font size input element to be clickable
                font_size_input = WebDriverWait(driver, 10).until(
                    EC.element_to_be_clickable((By.XPATH, '//*[@id="font-size"]'))
                )
                font_size_input.clear()
                font_size_input.send_keys('10')
            
                # Set font color to 'Black'
                driver.find_element("xpath","//select[@id='ink-color']/option[text()='Black']").click()
            
                # Set page effect to 'No Effect'
                driver.find_element("xpath","//select[@id='page-effects']/option[text()='No Effect']").click()
            
                # Clear text area and fill text
                text_area = driver.find_element("xpath",'//*[@id="note"]')
                text_area.clear()
                text_area.send_keys(texto)
            
                # Generate image and give a 2 second delay
                generate_image_button = driver.find_element("xpath",'//*[@id="generate-image-form"]/div/div[2]/div[2]/button')
                generate_image_button.click()
                time.sleep(2)
            
                # Download image
                download_image_button = driver.find_element("xpath",'//*[@id="output"]/div/div/a')
                download_image_button.click()
            
                # Wait for the image to download
                time.sleep(5)  # Adjust as needed
                os.system('mv download.jpeg ./tmp/handwriting.jpeg')
                # Rename the downloaded file
             
                self._set_headers()
                # Close converted image
                close_converted_image_button = driver.find_element("xpath",'//*[@id="output"]/div/button')
                close_converted_image_button.click()
            
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
            
            finally:
                # Close the WebDriver
                driver.quit()
        elif endpoint == "/pdf":

            pdfpath = data.get('pdfpath')
            print("texto:", pdfpath)
            self._set_headers()
            
            # parameters
            PDF_FILE_PATH = pdfpath
            
            # get prompt
            def get_prompt(text):
                # read prompt from file
                with open("prompts/summarize.txt", "r") as file:
                    prompt = file.read()
            
                # replace text
                prompt = prompt.replace("{{TEXT_TO_SUMMARIZE}}", text)
            
                return prompt
            
            async def summarize(input_text):
                try:
                    endpoint = 'https://api.itsrose.rest/chatGPT/turbo'
                    data = {
                        'model': 'gpt-4-1106-preview',
                        'max_tokens': 2048,
                        'messages': [
                            {
                                'role': 'system',
                                'content': 'Voce é um bot gerador de sumários, que cria sumários e resumos bem documentados e explicativos de tamanho médio de textos.Faca resumos precisos de cada capitulo e de fotma didática'
                            },
                            {
                                'role': 'user',
                                'content': input_text
                            
                            },
                            {
                                'role': 'user',
                                'content': "crie um sumario e resuma tudo isso no maximo em 10 linhas "
                            }
                        ],
                    }
                    headers = {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
                    }
                    async with aiohttp.ClientSession() as session:
                        async with session.post(endpoint, headers=headers, json=data) as response:
                            response_body = await response.text()
                            # Log the response body
            
                            try:
                                result = json.loads(response_body)
                                return result['message']
                                self.wfile.write(result['message'].encode())
                            except json.JSONDecodeError:
                                print("Non-JSON response:", response_body)
                                return "Sorry, I couldn't process your request at the moment. Please try again later."
                except Exception as e:
                    print('Error:', e)
            async def finalsummarize(input_text):
                try:
                    endpoint = 'https://api.itsrose.rest/chatGPT/turbo'
                    data = {
                        'model': 'gpt-4-1106-preview',
                        'max_tokens': 2008,
                        'messages': [
                            {
                                'role': 'system',
                                'content': 'Voce é um bot gerador de sumários, que cria sumários e resumos bem documentados e explicativos de tamanho médio de textos.Faca um sumario descritivo e explicativo de tudo que lhe for apresentado'
                            },
                            {
                                'role': 'user',
                                'content': input_text
                            },
                                                        {
                                'role': 'user',
                                'content': "crie um sumario e resuma tudo isso no maximo em 25 linhas "
                            }
                        ],
                    }
                    headers = {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
                    }
                    async with aiohttp.ClientSession() as session:
                        async with session.post(endpoint, headers=headers, json=data) as response:
                            response_body = await response.text()
                            print(response_body)  # Log the response body
            
                            try:
                                result = json.loads(response_body)
                                print(result['message'])
                                return result['message']
                                self.wfile.write(result['message'].encode())
                            except json.JSONDecodeError:
                                print("Non-JSON response:", response_body)
                                return "Sorry, I couldn't process your request at the moment. Please try again later."
                except Exception as e:
                    print('Error:', e)
            
            def combine_chunks(summaries):
  
                # combine chunks of "summaries" array into one string of max 4000 characters
                chunks = []
            
                summary = ""
                for sum in summaries:
                    if len(sum) + len(summary) > 3000:
                        chunks.append(summary)
                        summary = ""
            
                    summary += sum
            
                if len(chunks) == 0:
                    chunks.append(summary)
            
                return chunks
            
            async def main():
                # creating a pdf file object
                reader = PdfReader(PDF_FILE_PATH)
            
                # page text array
                page_text = []
            
                # extracting text from page
                for page in reader.pages:
                    page_text.append(page.extract_text())
                print("Summarizing text...")
                iterations = 1
            
                combined_summaries = combine_chunks(page_text)
                print("Found " + str(len(combined_summaries)) + " chunks to summarize.")
            
                while True:
                    if len(combined_summaries) <= 1:
                        break
            
                    summaries_of_summaries = []
                    # print summaries
                    for i, summary in enumerate(combined_summaries):
                        print(f"Summarizing summary {i + 1} of {len(combined_summaries)}, iteration {iterations}...")
                        summaries_of_summaries.append(await summarize(summary))
            
                    
                    
                    combined_summaries = combine_chunks(summaries_of_summaries)
                    print(combined_summaries)
                    iterations += 1
            
                # summarize last chunk
                print("array embaixo...")
            
                final_summary = await finalsummarize(combined_summaries[0])
                print(final_summary)
                # Return the final short summary of the PDF
                
                print("Writing summaries to file...")
                # print summaries_of_summaries to file
                while len(final_summary) > 3000:
                   final_summary = finalsummarize(final_summary)
    
                self.wfile.write(final_summary.encode())
                with open("tmp/output.txt", "a+", encoding="utf-8") as file:
                    file.write(final_summary)
            try:
              asyncio.run(main())
            except Exception as e:
              self._set_headers(500)
              self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/bookinfo":
  
           
               pdfpath = request.form.get('pdfpath')
                  
    # Simulate processing and returning some data
              response_data = {
                  "message": "File found",
                  "path": pdfpath,
                  "size": os.path.getsize(pdfpath)  # Example: returning the size of the file
              }
              print("texto:", pdfpath)
              self._set_headers()
              
              # parameters
              PDF_FILE_PATH = pdfpath
              
              # get prompt
              def get_prompt(text):
                  # read prompt from file
                  with open("prompts/summarize.txt", "r") as file:
                      prompt = file.read()
              
                  # replace text
                  prompt = prompt.replace("{{TEXT_TO_SUMMARIZE}}", text)
              
                  return prompt
              
              async def summarize(input_text):
                  try:
                      endpoint = 'https://api.itsrose.rest/chatGPT/turbo'
                      data = {
                          'model': 'gpt-4-1106-preview',
                          'max_tokens': 2048,
                          'messages': [
                              {
                                  'role': 'system',
                                  'content': "Busque informações da primeira página deste livro, me informe quem é o Autor, Quem é a Editora, que ano foi publicado e a categoria do livro. Retorne a mensagem estritamente com esses dados como no Seguinte modelo.\n♱ {TITULO}\n _{AUTOR DO LIVRO}_ \n\n𖤍   {EDITORA} \n ⋆{ANO PUBLICADO} \n\n\n _DESCRIÇÃO:_ {DESCRICAO DE 2 LINHAS DO LIVRO} "
                              },
                              {
                                  'role': 'user',
                                  'content': input_text
                              
                              },
     
                          ],
                      }
                      headers = {
                          'accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer 7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
                      }
                      async with aiohttp.ClientSession() as session:
                          async with session.post(endpoint, headers=headers, json=data) as response:
                              response_body = await response.text()
                              # Log the response body
              
                              try:
                                  result = json.loads(response_body)
                                  return result['message']
                                  self.wfile.write(result['message'].encode())
                              except json.JSONDecodeError:
                                  print("Non-JSON response:", response_body)
                                  return "Sorry, I couldn't process your request at the moment. Please try again later."
                  except Exception as e:
                      print('Error:', e)
             
              def combine_chunks(summaries):
    
                  # combine chunks of "summaries" array into one string of max 4000 characters
                  chunks = []
              
                  summary = ""
                  for sum in summaries:
                      if len(sum) + len(summary) > 3000:
                          chunks.append(summary)
                          summary = ""
              
                      summary += sum
              
                  if len(chunks) == 0:
                      chunks.append(summary)
              
                  return chunks
             
            
             
              
              async def main():
                      # creating a pdf file object
                  reader = PdfReader(PDF_FILE_PATH)
                  # Extract text from the first page only
                  first_page_text = reader.pages[0].extract_text()
                  
                  print("Text from the first page:")
                  print(first_page_text)
      
                  iterations = 1
                  print('ok1')
                  combined_summaries = combine_chunks(first_page_text)
                  print("Found " + str(len(combined_summaries)) + " chunks to summarize.")
              
                  while True:
                      if len(combined_summaries) <= 1:
                          break
              
                      summaries_of_summaries = []
                      # print summaries
                      for i, summary in enumerate(combined_summaries):
                          print(f"Summarizing summary {i + 1} of {len(combined_summaries)}, iteration {iterations}...")
                          summaries_of_summaries.append(await summarize(summary))
              
                      
                      print('ok2')
                      combined_summaries = combine_chunks(summaries_of_summaries)
                      print(combined_summaries)
                      iterations += 1
              
                  # summarize last chunk
                  print("array embaixo...")
              
                  final_summary = await summarize(combined_summaries[0])
                  print(final_summary)
                  # Return the final short summary of the PDF
                  
                  print("Writing summaries to file...")
                  # print summaries_of_summaries to file
                  while len(final_summary) > 3000:
                     final_summary = finalsummarize(final_summary)
      
                  self.wfile.write(final_summary.encode())
                  print('ok3')
                  with open("tmp/output.txt", "a+", encoding="utf-8") as file:
                      file.write(final_summary)
                  
              try:
                asyncio.run(main())
              except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/docch":
      
              pdfpath = data.get('pdfpath')
              usertext = data.get('textoppt')
              systemd = data.get('system')
              sumtext = data.get('systemsum')
              print("texto:", pdfpath)
              self._set_headers()
              
              # parameters
              PDF_FILE_PATH = pdfpath
              
              # get prompt
              def get_prompt(text):
                  # read prompt from file
                  with open("prompts/summarize.txt", "r") as file:
                      prompt = file.read()
              
                  # replace text
                  prompt = prompt.replace("{{TEXT_TO_SUMMARIZE}}", text)
              
                  return prompt
              
              async def summarize(input_text):
                  try:
                      endpoint = 'https://api.itsrose.rest/chatGPT/turbo'
                      data = {
                          'model': 'gpt-4-1106-preview',
                          'max_tokens': 2048,
                          'messages': [
                              {
                                  'role': 'system',
                                  'content': 'Voce é um bot gerador de sumários, que cria sumários e resumos bem documentados e explicativos de tamanho médio de textos.Faca resumos precisos do que lhe for apresentado '
                              },
                              {
                                  'role': 'user',
                                  'content': input_text
                              }
                          ],
                      }
                      headers = {
                          'accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer 7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
                      }
                      async with aiohttp.ClientSession() as session:
                          async with session.post(endpoint, headers=headers, json=data) as response:
                              response_body = await response.text()
                              print(response_body)  # Log the response body
              
                              try:
                                  result = json.loads(response_body)
                                  return result['message']
                                  self.wfile.write(result['message'].encode())
                              except json.JSONDecodeError:
                                  print("Non-JSON response:", response_body)
                                  return "Sorry, I couldn't process your request at the moment. Please try again later."
                  except Exception as e:
                      print('Error:', e)
              async def finalsummarize(input_text):
                  try:
                      endpoint = 'https://api.itsrose.rest/chatGPT/turbo'
                      data = {
                          'model': 'gpt-4-1106-preview',
                          'max_tokens': 2048,
                          'messages': [
                              {
                                  'role': 'system',
                                  'content': sumtext
                              },
                              {
                                  'role': 'user',
                                  'content': input_text
                              },
                              {
                                  'role': 'system',
                                  'content': 
                                    'Voce se chama Edgar, esse é seu nome, e como um cientista e pesquisador sênior, por favor, forneça uma explicação detalhada sobre qualquer coisa que o usuário possa perguntar. Certifique-se de incluir fontes relevantes e exemplos, se for necessário. Ofereça explicações passo a passo e use o jargão específico para deixá-lo mais claro para o usuário. Garanta que inclua aplicações práticas também. Seja completo nas respostas e abrangendo todo o processo do tema da questão, de forma que não reste dúvidas.Se possível, formate a mensagem com símbolos e palavras em negritos, parágrafos, símbolos  e outros meios para viabilizar a leitura, faça textos grandes e bem aprofundados. Responda a seguinte mensagem do usuario referente ao texto apresentaro anteriormente  e responda com uma mensagem no maximo de 20 linhas: "'+ usertext + '"'
                              }
                          ],
                      }
                      headers = {
                          'accept': 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer 7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
                      }
                      async with aiohttp.ClientSession() as session:
                          async with session.post(endpoint, headers=headers, json=data) as response:
                              response_body = await response.text()
                              print(response_body)  # Log the response body
              
                              try:
                                  result = json.loads(response_body)
                                  return result['message']
                                  self.wfile.write(result['message'].encode())
                              except json.JSONDecodeError:
                                  print("Non-JSON response:", response_body)
                                  return "Sorry, I couldn't process your request at the moment. Please try again later."
                  except Exception as e:
                      print('Error:', e)
              
              def combine_chunks(summaries):
                  """
                  Combine chunks of "summaries" array into one string of max 4000 characters
                  """
                  # combine chunks of "summaries" array into one string of max 4000 characters
                  chunks = []
              
                  summary = ""
                  for sum in summaries:
                      if len(sum) + len(summary) > 4000:
                          chunks.append(summary)
                          summary = ""
              
                      summary += sum
              
                  if len(chunks) == 0:
                      chunks.append(summary)
              
                  return chunks
              
              async def main():
                  # creating a pdf file object
                  reader = PdfReader(PDF_FILE_PATH)
              
                  # page text array
                  page_text = []
              
                  # extracting text from page
                  for page in reader.pages:
                      page_text.append(page.extract_text())
              
                  print("Summarizing text...")
              
                  iterations = 1
              
                  combined_summaries = combine_chunks(page_text)
                  print("Found " + str(len(combined_summaries)) + " chunks to summarize.")
              
                  while True:
                      if len(combined_summaries) <= 1:
                          break
              
                      summaries_of_summaries = []
                      # print summaries
                      for i, summary in enumerate(combined_summaries):
                          print(f"Summarizing summary {i + 1} of {len(combined_summaries)}, iteration {iterations}...")
                          summaries_of_summaries.append(await summarize(summary))
              
                      print(summaries_of_summaries)
                      combined_summaries = combine_chunks(summaries_of_summaries)
                      print(combined_summaries)
                      iterations += 1
              
                  # summarize last chunk
                  print("Summarizing last chunk...")
              
                  final_summary = await finalsummarize(combined_summaries[0])
                  while len(final_summary) > 3000:
                     final_summary = finalsummarize(final_summary)
      
                  self.wfile.write(final_summary.encode())
                  
                  print(final_summary)
                  print("Writing summaries to file...")
                  # print summaries_of_summaries to file
                  with open("tmp/output.txt", "a+", encoding="utf-8") as file:
                      file.write(final_summary)
              try:
                asyncio.run(main())
              except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/transcribe":
              filepath = data.get('filepath')
              print("texto:", filepath)
              print(f"Audio downloaded to {filepath}")
              model = whisper.load_model("base")
              result = model.transcribe(filepath)
              transcribed_text = result["text"]
              print(transcribed_text)
              self._set_headers()
              try:
                self.wfile.write(transcribed_text.encode())
                print("Sending data:", transcribed_text)
              except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/imagine":
            prompt = data.get('prompt')
            bing_art = BingArt(auth_cookie_U='1OGzebuFagmTDI51hlqgChGy27jfM2zRku-rNvpAvul-2M1P-5uQVAAJC2IOrq1pVLL9zfH-ZptCITGGZrxQd4WpVV72vIV8UVbVxi8JPAKSuZaSiNd1t3MxVG8bnRFFnVnPcgvvATHjQMyboPxg4TvPRnt5Muv1XkBKKbJTol2R6ORQNK3zXYhKEPabfVJT4g55dvJXrQBVbz8BO3nlDlHAGY53a0Y2eocXlUTcLLmc')
            
            
            try:
              results = bing_art.generate_images(prompt)               
            finally:
              bing_art.close_session()
              print("URL:", results)
              print("running imagine:")
              
              # Set the response headers
              self._set_headers()
              
              # Encode the JSON data and send it to the client
              try:
                  json_data = json.dumps(results)  # Convert dictionary to JSON string
                  self.wfile.write(json_data.encode())  # Send JSON data to client
              except Exception as e:
                  # If an exception occurs, set error status code and send error message
                  self._set_headers(500)
                  error_msg = {'error': str(e)}
                  self.wfile.write(json.dumps(error_msg).encode())  # Send error message to client
        elif endpoint == "/wps":
            host = data.get('host')
            optional_args = data.get('optional_args', '').split()
          
            

            print("URL:", host)
            print("Optional args:", optional_args)
            
            wpscancommand = []
            if not host:
              wpscancommand = ['wpscan', '-h']
            elif host and not optional_args:
              wpscancommand = ['wpscan', '--url', host]
            else:
              wpscancommand = ['wpscan', '--url', host] + optional_args           
            
            print("Executing wpscam command:", wpscancommand)

            try:
                process = subprocess.Popen(wpscancommand, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                self._set_headers()
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
                    time.sleep(0.1)  # Add a small delay to simulate real-time output
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/whois":
            host = data.get('host')
            print("Host:", host)

            if not host:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Host (IP address or URL) is required'}).encode())
                return

            whois_command = ['whois', host]
            print("Executing whois command:", whois_command)

            try:
                process = subprocess.Popen(whois_command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                self._set_headers()
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/shodan":
            host = data.get('target')
            tipo = data.get('type')
            print("Host:", host)
            if tipo == 'scan':
              shodancommand = ['shodan', tipo, 'submit', host]
            else:
              shodancommand = ['shodan', tipo, host]
            print("Executing shodan command:", shodancommand)

            try:
                process = subprocess.Popen(shodancommand, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                self._set_headers()
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/exec":
            command = data.get('command')
            print("Command:", command)

            if not command:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Command is required'}).encode())
                return

            self._set_headers()
            try:
                process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
                for line in process.stdout:
                    self.wfile.write(line.encode())
                    print("Sending data:", line.strip())
            except Exception as e:
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        elif endpoint == "/nmap":
            ip = data.get('ip')
            nmap_args = data.get('nmap_args', [])

            print("IP:", ip)
            print("Nmap args:", nmap_args)

            if not ip:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'IP address is required'}).encode())
                return

            nmap_command = ['nmap', ip] + nmap_args
            print("Executing Nmap command:", nmap_command)

            try:
                output = subprocess.check_output(nmap_command, stderr=subprocess.STDOUT)
                self._set_headers()
                response_data = {'output': output.decode('utf-8')}
                self.wfile.write(json.dumps(response_data).encode())
            except subprocess.CalledProcessError as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': e.output.decode('utf-8')}).encode())
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Endpoint not found'}).encode())

if __name__ == "__main__":
    def run(server_class=HTTPServer, handler_class=RequestHandler, port=8330):
        server_address = ('', port)
        httpd = server_class(server_address, handler_class)
        print(f'Starting server on port {port}...')
        httpd.serve_forever()

    run()