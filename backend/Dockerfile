# Stage1: ビルド用イメージ
FROM maven:3.8.7-openjdk-17 AS builder

WORKDIR /workspace

# Maven Wrapper とpom をコピーして依存解決
COPY mvnw pom.xml ./
COPY .mvn .mvn
RUN chmod +x mvnw \
 && ./mvnw dependency:go-offline -B

# ソースをコピーしてパッケージング
COPY src src
RUN ./mvnw clean package -DskipTests

# Stage2: ランタイム用イメージ
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# ビルドステージから JAR を持ってくる
COPY --from=builder /workspace/target/*.jar app.jar

# Render の $PORT を渡す
ENV JAVA_OPTS="-Dserver.port=${PORT:-8080}"

# デフォルトのヘルスチェックパスが “/” ならこれでOK
ENTRYPOINT ["sh","-c","java $JAVA_OPTS -jar app.jar"]
