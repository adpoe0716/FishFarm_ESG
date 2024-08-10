import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
driver = webdriver.Chrome()

try:
    driver.get("https://efish.fa.gov.tw/efish/statistics/daysinglemarketmultifish.htm#")

    search_input = driver.find_element(By.NAME, 'mid')
    search_input.send_keys("斗南")

    wait = WebDriverWait(driver, 10)
    btn = wait.until(EC.element_to_be_clickable((By.CLASS_NAME, "btn-search")))
    btn.click()

    time.sleep(2)

    data = {}

    try:
        milkfish = driver.find_element(By.XPATH, "//tr[td[contains(text(), '1041')]]")
        # print(milkfish.text)
        data['milkfish'] = milkfish.text
    except:
        # print("虱目魚今天沒有資料")
        data['milkfish'] = "虱目魚今天沒有資料"

    time.sleep(1)

    try:
        clam = driver.find_element(By.XPATH, "//tr[td[contains(text(), '5022')]]")
        # print(clam.text)
        data['clam'] = clam.text
    except:
        # print("文蛤今天無資料")
        data['clam'] = "文蛤今天無資料"

    time.sleep(1)

    try:
        shrimp = driver.find_element(By.XPATH, "//tr[td[contains(text(), '4012')]]")
        # print(shrimp.text)
        data['shrimp'] = shrimp.text
    except:
        # print("草蝦今天無資料")
        data['shrimp'] = "草蝦今天無資料"

finally:
    driver.quit()

# print(type(data))
print(json.dumps(data, ensure_ascii=False))
# print(type(json.dumps(data, ensure_ascii=False)))