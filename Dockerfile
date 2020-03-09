### ベースステージ ###
FROM node:lts-alpine as base

# @angular/cliをグローバルインストール
RUN npm install -g @angular/cli

# ワーキングディレクトリの設定
WORKDIR /app

# package.jsonをコピー
COPY ./package*.json /app/

# 一度node_modulesを削除してからnpm install
RUN rm -rf node_modules && npm install


### ビルドステージ ###
FROM base as build

# 全てのソースファイルをコピー
COPY ./ /app/

### プロダクションステージ ###
FROM nginx:alpine as prod

# ビルドステージで生成されたファイルをnginxの公開用ディレクトリにコピー
COPY /app/dist/angular-tour-of-heros /usr/share/nginx/html

# nginx.confをコピー
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
