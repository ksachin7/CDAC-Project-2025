# Step 1: Build
FROM node:lts AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
COPY .env ./
COPY .env.production ./
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy build to Nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]
