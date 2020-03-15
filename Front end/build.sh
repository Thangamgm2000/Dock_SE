#!/usr/bin/env bash

set -e

echo "Building image..."
aws --version
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 122927489672.dkr.ecr.us-east-1.amazonaws.com/devops
tym=$(date "+%s")
docker build -t $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:ver$tym .
echo "Pushing image"
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:ver$tym
echo "Updating CFN"
aws cloudformation update-stack --stack-name $STACK_NAME --use-previous-template --capabilities CAPABILITY_IAM \
  --parameters ParameterKey=DockerImageURL,ParameterValue=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO:ver$tym  \
  ParameterKey=DesiredCapacity,UsePreviousValue=true \
  ParameterKey=InstanceType,UsePreviousValue=true \
  ParameterKey=MaxSize,UsePreviousValue=true \
  ParameterKey=SubnetIDs,UsePreviousValue=true \
  ParameterKey=VpcId,UsePreviousValue=true
