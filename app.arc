@app
pinelabskyc

@http
post /pinelabs/kyc

@aws    
timeout 200
profile default
memory 3008
region ap-south-1
architecture arm64
policies AmazonDynamoDBFullAccess

