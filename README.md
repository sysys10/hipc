## 🚀 주요 기능

### 사용자 웹 (Web)

- **학생 대시보드**: 학생들이 자신의 수업과 학습 진행 상황을 확인할 수 있습니다.
- **과목 및 수업 조회**: 사용 가능한 과목과 수업 정보를 탐색할 수 있습니다.
- **공지사항**: 중요한 알림과 공지를 확인할 수 있습니다.
- **캘린더 통합**: 수업 일정을 캘린더를 통해 직관적으로 확인할 수 있습니다.
- **회원 관리**: 사용자 계정 생성 및 관리 기능을 제공합니다.

## 📋 기술 스택

### 프론트엔드
- **React & Next.js**: 웹 애플리케이션 프레임워크
- **TypeScript**: 타입 안전성을 갖춘 코드 작성
- **TailwindCSS**: 디자인 시스템 및 스타일링
- **Shadcn/UI**: 재사용 가능한 UI 컴포넌트
- **Framer Motion**: 애니메이션 구현
- **React Query**: 데이터 페칭 및 캐싱

### 백엔드
- **Supabase**: 데이터베이스 및 인증 서비스
- **NextAuth.js**: 인증 시스템
- **API Routes**: 서버리스 API 엔드포인트

### 개발 도구
- **Turborepo**: 모노레포 관리
- **pnpm**: 패키지 관리자
- **ESLint & Prettier**: 코드 품질 관리

## 🌐 프로젝트 구조

```
.
├── apps
│   ├── admin              # 관리자 애플리케이션
│   └── web                # 사용자 웹 애플리케이션
└── packages
    ├── eslint-config      # 공유 ESLint 설정
    ├── typescript-config  # 공유 TypeScript 설정
    └── ui                 # 공유 UI 컴포넌트 라이브러리
```

## 💻 설치 및 실행 방법

1. 의존성 설치:
```bash
pnpm install
```

2. 애플리케이션 실행:

   - 모든 애플리케이션 실행:
   ```bash
   pnpm run dev
   ```

   - 특정 애플리케이션 실행:
   ```bash
   # 관리자 앱 실행
   pnpm admin:dev
   
   # 웹 앱 실행
   pnpm web:dev
   ```

## 🔧 환경 변수 설정

`.env.local` 파일을 각 애플리케이션 폴더 (`apps/admin` 및 `apps/web`)에 생성하고 아래 변수를 설정합니다:

```env
# 공통
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# 웹 앱
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_CHANNEL_PLUGIN_KEY=your_channel_talk_key
NEXT_PUBLIC_KAKAO_APP_KEY=your_kakao_map_key
```

## 🔍 프로젝트 명령어

```bash
# 빌드
pnpm build

# 린트 검사
pnpm lint

# 코드 포맷팅
pnpm format
```

## 📚 컴포넌트 사용법

### UI 컴포넌트

패키지 라이브러리의 UI 컴포넌트를 사용하는 방법:

```tsx
import { Button } from '@packages/ui/components/button';

export default function MyComponent() {
  return (
    <Button variant="default" size="default">
      클릭하세요
    </Button>
  );
}
```

## 📝 라이센스

이 프로젝트는 [MIT 라이센스](LICENSE)에 따라 라이센스가 부여됩니다.
