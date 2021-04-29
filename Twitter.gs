//OAuth認証
function getTwitterService() {
  return OAuth1.createService("Twitter")
     .setAuthorizationUrl('hhttps://api.twitter.com/oauth/authorize')
     .setConsumerKey(PropertiesService.getScriptProperties().getProperty("CONSUMER_API_KEY"))
     .setConsumerSecret(PropertiesService.getScriptProperties().getProperty("CONSUMER_API_SECRET_KEY"))
     .setAccessToken(PropertiesService.getScriptProperties().getProperty("ACCESS_TOKEN"),
                     PropertiesService.getScriptProperties().getProperty("ACCESS_TOKEN_SECRET"))
 }
 
 
// ツイート
function tweet() {
  let twitter = getTwitterService()//twitterオブジェストの作成
  
  if (twitter.hasAccess()){
    let url = 'https://api.twitter.com/1.1/statuses/update.json'
    let text = getTweetContentFromSheet()
    let payload = {status : text}
    
   
    let response = twitter.fetch(url,{
      method : "post",
      payload : payload})
      
   // console.log(response.getResponseCode())
  }else{
   // console.log(servise.getLastError())
  }
}

const spreadsheet = SpreadsheetApp.openById('1exjYjVCBhSdVNnvaZMB52s4zonCCPc3dK-FpzBIQ2GY')
const sheet =  spreadsheet.getSheetByName("TweetContent")

function getTweetContentFromSheet(){

  let count = sheet.getLastRow() -1
  let tweetList = sheet.getRange(2,2,count,1).getValues()
  
  let i = sheet.getRange(1,5,1,1).getValue()
  i ++;
  //console.log(i)
  if(count <= i -1){
  i = 1;
  }
  sheet.getRange(1,5,1,1).setValue(i)
   console.log(tweetList[i-1])
  return tweetList[i-1] 
 
}