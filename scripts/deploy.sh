#!/bin/sh
openssl aes-256-cbc -K $encrypted_ddf7872b8477_key -iv $encrypted_ddf7872b8477_iv -in secret.key.enc -out secret.key -d
ssh -i secret.key -p50265 travis@breathe.network 'rm -r /home/http/breathe/website/build'
scp -i secret.key -P50265 -r build travis@breathe.network:/home/http/breathe/website
