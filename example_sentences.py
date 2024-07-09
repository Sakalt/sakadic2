import schedule
import time
from datetime import datetime

def generate_example_sentence():
    # 例文生成のロジック
    example_sentence = "これは架空言語の例文です。"
    japanese_translation = "これは日本語訳です。"
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"{current_time} - {example_sentence} ({japanese_translation})")

# 毎日午前6時に例文を生成
schedule.every().day.at("06:00").do(generate_example_sentence)

while True:
    schedule.run_pending()
    time.sleep(1)
