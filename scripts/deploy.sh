#!/bin/sh
openssl aes-256-cbc -K $encrypted_ddf7872b8477_key -iv $encrypted_ddf7872b8477_iv -in scripts/secret.key.enc -out scripts/secret.key -d
chmod 0600 scripts/secret.key
ssh -i scripts/secret.key -p50265 travis@breathe.network 'rm -rf /home/http/breathe/website/dist'
scp -i scripts/secret.key -P50265 -r dist travis@breathe.network:/home/http/breathe/website
ssh -i scripts/secret.key -p50265 travis@breathe.network 'sudo systemctl restart breathenetwork.service'
