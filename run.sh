#!/bin/bash

IMAGE_NAME="bitcoin-price-ms"
PORT=${1:-8888}

echo "Building Docker image: $IMAGE_NAME..."
docker build -t $IMAGE_NAME .

echo "Stopping and removing existing container (if exists)..."
docker stop $IMAGE_NAME && docker rm $IMAGE_NAME

echo "Running Docker container on port $PORT..."
docker run -d -p $PORT:$PORT -e PORT=$PORT --name $IMAGE_NAME $IMAGE_NAME


echo "Container $IMAGE_NAME is running on port $PORT"