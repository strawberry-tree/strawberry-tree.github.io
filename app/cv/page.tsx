import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'CV' })

export default function CVPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          송상록
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Software Engineer</p>
      </div>
      <div className="prose max-w-none pb-8 pt-8 dark:prose-invert">
        {/* Contact & Introduction */}
        <section className="mb-12">
          <p className="mb-4">
            <a
              href="mailto:drinkingstraw33@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              drinkingstraw33@gmail.com
            </a>
          </p>
          <p className="text-base leading-7 mb-6">
            사용자 경험과 성능 최적화에 집중하는 Next.js·React 프론트엔드 개발자입니다.
            3D 인테리어 시뮬레이터를 개발하며 3D 모델 최적화를 통해 로딩 속도를 6초에서 2.5초로 단축했고,
            Zustand slice 패턴으로 상태를 도메인별 분리하여 불필요한 리렌더링을 방지했습니다.
            Socket.io와 Redis를 활용한 실시간 협업 기능 구현 경험도 보유하고 있습니다.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              Socket.io
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              Zustand
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              TailwindCSS
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">AWS</span>
          </div>
        </section>

        {/* Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">포트폴리오 URL</h2>
          <ul className="list-none space-y-2">
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                기술 블로그
              </a>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">프로젝트</h2>

          {/* 어따놀래 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">어따놀래 - 우리 집 꾸미기 시뮬레이터</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              크래프톤 정글 9기 | 2025.08. - 2025.09. (2개월)
            </p>
            <p className="mb-3">
              생성형 AI로 제작한 3D 가구를 여러 사용자가 동시에 배치할 수 있는 협업 시뮬레이터
            </p>
            <p className="text-sm mb-3">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mr-3">GitHub</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mr-3">서비스 링크</a>
              <span className="text-gray-600 dark:text-gray-400">
                Next.js, React Three Fiber, Zustand, PostgreSQL, Redis, Socket.io, OpenCV.js
              </span>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>팀 리더로서 기획, 개발, 배포 전 과정 총괄</li>
              <li>
                <strong>3D 씬 성능 최적화</strong>
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>3D 모델 Draco 압축 + 텍스처 WebP 변환: 용량 1.3MB→0.1MB, 로딩 6s→2.5s</li>
                  <li>Zustand Slice 패턴: 도메인별 상태 분리, 3D 씬 불필요한 리렌더링 방지</li>
                </ul>
              </li>
              <li>
                <strong>동시편집 안정성 확보</strong>
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>Socket.io throttling(30ms) 적용: 드래그 중 서버 부하 방지</li>
                  <li>Map 기반 객체 Lock 관리 + Redis 검증: 다중 사용자 동시 수정 충돌 차단</li>
                </ul>
              </li>
              <li>
                <strong>사용자 편의성 개선</strong>
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>벽 자석 기능: OBB 좌표 변환으로 가구-벽 거리 계산, 30cm 이내 자동 스냅하여 수동 정렬 불편 해소</li>
                  <li>도면 자동 인식: OpenCV.js Hough Transform + 평행선 병합, 2D 도면 이미지에서 벽 자동 검출</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* 모의고사 자동제작 서비스 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">효율적 복습을 위한 모의고사 자동제작 서비스</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              개인 프로젝트 | 2024.03. - 2024.04. (2개월)
            </p>
            <p className="mb-3">
              학생이 업로드한 PDF, docx 학습 자료로 맞춤형 모의고사를 자동 생성하는 에듀테크 서비스
            </p>
            <p className="text-sm mb-3">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mr-3">GitHub</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mr-3">시연 영상</a>
              <span className="text-gray-600 dark:text-gray-400">
                Langchain (Python), Streamlit, OpenAI GPT-4
              </span>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>LangChain + GPT-4 API로 문제, 선지, 정답, 해설 자동 생성 시스템 구축</li>
              <li>세션 상태 관리: Streamlit 세션으로 문제 생성, 풀이, 채점 과정을 관리하여 새로고침 시 데이터 손실 방지</li>
              <li>출력 안정화: Pydantic 기반 JSON 스키마로 응답 형식 강제, 파싱 실패 가능성 제거</li>
            </ul>
          </div>

          {/* 대충 살아보는 대학생활 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">대충 살아보는 대학생활 - 웹게임</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              학교 홍보용 웹게임 - 팀 프로젝트 | 2020.11. - 2020.12. (2개월)
            </p>
            <p className="mb-3">
              이벤트 선택지 시스템을 통해 스탯이 변화하고 엔딩이 분기되는 형식의, 학교 홍보용 웹게임
            </p>
            <p className="text-sm mb-3">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mr-3">GitHub</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mr-3">서비스 링크</a>
              <span className="text-gray-600 dark:text-gray-400">p5.js</span>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>팀 리더</strong>로서 프로젝트 총괄 및 개발팀-디자인팀 간 소통 조율</li>
              <li><strong>리소스 로딩 최적화</strong>: 사전 로딩으로 15MB 이미지/사운드 처리, 이벤트 로딩 1초→0.1초 단축</li>
              <li><strong>데이터 구조 설계</strong>: 객체 기반으로 30개 이벤트 선택지별 스탯 변동값 관리, 유지보수성 향상</li>
              <li><strong>UI 모듈화</strong>: 컴포넌트 기반 설계로 플레이어/주사위/이벤트 팝업 등 모듈화, 코드 재사용성 확보</li>
            </ul>
          </div>

          {/* Pintos */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Pintos - 운영체제 구현 프로젝트</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              크래프톤 정글 9기 | 2025.07. - 2025.08. (2개월)
            </p>
            <p className="mb-3">
              교육용 운영체제 Pintos의 쓰레드, 시스템 콜, 가상 메모리 관련 기능을 구현
            </p>
            <p className="text-sm mb-3">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mr-3">GitHub</a>
              <span className="text-gray-600 dark:text-gray-400">C</span>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>페이지 폴트 핸들러, 디스크 스왑을 통한 가상 메모리 시스템 구현: 물리 메모리 부족 문제 해결</li>
              <li>fork/wait 시스템 콜 내부 세마포어 기반 부모-자식 프로세스 동기화: 프로세스 생성 안정성 확보</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">교육</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">서울대학교</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              대학교(학사) | 심리학과
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">2019.03. - 2025.02. (졸업)</p>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">대외활동</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">크래프톤 정글 9기</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">2025.05. ~ 2025.10.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                동료들과 5개월간 집중 합숙 학습을 통해 자료구조, 알고리즘, 컴퓨터 구조 등 전공 지식
                강화
              </li>
              <li>
                로우레벨 C언어 기반 자료구조, 메모리 할당, 웹 서버, 운영체제 등 구현 프로젝트를
                수행하며 컴퓨터 과학 기초 역량 확보
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
