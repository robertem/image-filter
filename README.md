# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

This project includes:

[The Image Filtering Microservice], the final project for the course. It is a Node-Express application which runs a simple script to process images.

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

This enpoint is /filteredimage, it needs a query param named image_url to work.

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

## Stand Out (Optional)

### Refactor the course RESTapi

I only modified the save feed endpoint (/api/v0/feed) of RESTapi project in order to recieve a feed with its attributes: caption (which will be used as name of file in S3) and url (URL of any image in the web, for instance https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg). This endpoint call /filteredimage service of Image Filtering project to get the file from the feed's url and save it in S3 bucket.

> !!NOTE The code of RESTapi and its changes mentioned here are not included in this repository, but the project is deployed on EBS, so yo can test it.

In postman, you can find this endpoint whit the name "/api/v0/feed valid image URL for feed".

### Authentication

Prevent requests without valid authentication headers.

All endpoints in postman are secured, you can test it with postman.

> !!NOTE if you choose to submit this, make sure to add the token to the postman collection and export the postman collection file to your submission so we can review!

### Custom Domain Name

Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)

Sorry, but I have 2 EBS application, RDS and S3 running, and I have no free tier account :(

## Postman

You can find a postman file to be imported, it contains 3 requests:

1. /filteredimage valid image URL: It recieve a valid image url to be downloaded and return status code 200.
2. /filteredimage invalid image URL: It recieve an invalid image url (for example a not found URL) and return status coode 422.
3. /api/v0/feed valid image URL for feed: It saves a feed, but use url attribute to download the image calling /filteredimaage endpoint and save in S3

Postman works with collection variables

1. HOST: Host where is located filtering image project (image-filter-robertem-dev.us-east-1.elasticbeanstalk.com)
2. TOKEN: A valid jwt to be used as header for security (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.EMXV6Dr45FiPlIMxhKvsBTeBg2mRMUgYB7G88LAd_Hs)
3. REST_API_HOST: Host where is located RESTapi project (udagram-robertem-dev.us-east-1.elasticbeanstalk.com)

## EBS Application

You cand find the screenshot in ./deployment_screenshots folder in this repo
