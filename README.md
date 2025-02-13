# Inofsys With Next14, Ts, MonoRepo
## 실행법 
pnpm이 없다면 -> 

npm install -g pnpm or  brew install pnpm

```bash
pnpm run web:dev
```
## pnpm turborepo 모노레포 구조입니다.

### Next.js 14, TailwindCSS, zustand, @tanstack/react-query 사용 예정. ui는 일단 shadcn인데 쓸지 안쓸지는 모르겠습니다.

### 이전 레퍼지토리와 주요 차이점.:

#### 1. 폴더 구조 변경. constant, types, utils등의 폴더 구조를 apps 바깥에 위치시켰습니다.
#### 2. emotion, mui 사용중단: tailwindcss와 궁합이 안좋은 이유로 삭제하였습니다. + shadcn ui 사용은 고민해봐야할듯. (admin 만들 때는 필요할 것 같아요.)
#### 3. monorepo 구조 사용. root Dir의 packages에서 style, ui, eslint, ts config 를 관리합니다.

