import schedule
import time
from datetime import datetime

def generate_example_sentence():
    # 仮の例文生成のロジック（ユーザーが架空言語での例文を入力すると仮定）
    fictional_language_example = "これは架空言語での例文です。"
    japanese_translation = "これは日本語訳です。"
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"{current_time} - {fictional_language_example} ({japanese_translation})")

# 毎日午前6時に例文を生成
schedule.every().day.at("06:00").do(generate_example_sentence)

while True:
    schedule.run_pending()
    time.sleep(1)
