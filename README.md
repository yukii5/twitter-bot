# ツール・ライブラリの名前

tweet_bot

## 簡単な説明

スプレッドシートのセルに記述した文をTwitterに一件自動投稿し、下まで行けば、最初から繰り返されます。

## 機能
- 自動いいね機能

## 使い方

1. 以下のキーをスクリプトのプロパティに入力
    CONSUMER_KEY 
    CONSUMER_SECRET  
    ACCESS_TOKEN 
    ACCESS_TOKEN_SECRET 

2. 32行目(const spreadsheet = SpreadsheetApp.openById（'●●●●●'）)にスプレッドシートの●の部分を入力   
   https://docs.google.com/spreadsheets/d/●●●●●●●●●●●/edit#gid=0

3. 33行目(const sheet =  spreadsheet.getSheetByName("●●●●"))にスプレッドシートのシート名を入力

4. スプレッドシートのボタン又はトリガーを設定

5. 現在の番号を変更すれば指定したNoから、順番に実行されます。

## イメージ画像
<img width="884" alt="Twitter_spreadsheet" src="https://user-images.githubusercontent.com/71483628/116626895-0e44c880-a987-11eb-88cb-6fc50602b2bf.png">
