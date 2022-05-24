# 获取基础镜像
FROM node:16.15.0-alpine AS build

# 设置在容器的工作目录
WORKDIR /app

# 设置容器的环境变量
ENV PATH /app/node_modules/.bin:$PATH

# 添加依赖配置文件
COPY package.json package-lock.json ./

# 安装依赖
RUN npm ci

# 添加应用
COPY . ./

# 构建应用
RUN npm run build

# 部署Nginx服务
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]