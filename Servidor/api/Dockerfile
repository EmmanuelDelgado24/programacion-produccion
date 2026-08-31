# ---- Etapa 1: Build ----
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copiamos solo el csproj primero (cache de capas: si no cambian dependencias, no se re-descarga nada)
COPY ["api.csproj", "./"]
RUN dotnet restore "api.csproj"

# Copiamos el resto del código y compilamos
COPY . .
RUN dotnet publish "api.csproj" -c Release -o /app/publish --no-restore

# ---- Etapa 2: Runtime (imagen final) ----
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

RUN adduser --disabled-password --home /app --gecos '' appuser && chown -R appuser /app
USER appuser

COPY --from=build /app/publish .

EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Production

ENTRYPOINT ["dotnet", "api.dll"]