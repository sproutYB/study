# TypeScript

## TypeScript 설치

- 설치 방법1: npm을 이용한 설치 (Node.js 패키지 매니저)
  - 글로벌(g) 설치
    ```bash
    npm install -g typescript
    ```
  - 해당 폴더(로컬) 설치
    ```bash
    npm install typescript
    ```
- 설치 방법2: Visual Studio 플러그인 설치
  - Visual Studio 2017과 Visual Studio 2015 Update 3는 Typescript를 포함하고 있습니다. 만약 TypeScript를 Visual Studio와 함께 설치하지 않았다면 이곳에서 [다운로드](https://www.typescriptlang.org/)할 수 있습니다.

## TypeScript 버전 확인

- 글로벌

```bash
tsc -v
```

- 로컬

```bash
npx tsc -v
```

## TypeScript tsconfig.json 파일 생성

- 글로벌

```bash
tsc --init
```

- 로컬

```bash
npx tsc --init
```
