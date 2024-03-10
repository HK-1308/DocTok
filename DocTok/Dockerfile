#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["DocTok/DocTok.csproj", "DocTok/"]
COPY ["DocTok.BusinessLayer/DocTok.BusinessLayer.csproj", "DocTok.BusinessLayer/"]
COPY ["DocTok.DataAccess/DocTok.DataAccess.csproj", "DocTok.DataAccess/"]
COPY ["DocTok.Shared/DocTok.Shared.csproj", "DocTok.Shared/"]
COPY ["DocTok.Dependencies/DocTok.Dependencies.csproj", "DocTok.Dependencies/"]
RUN dotnet restore "DocTok/DocTok.csproj"
COPY . .
WORKDIR "/src/DocTok"
RUN dotnet build "DocTok.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DocTok.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DocTok.dll"]