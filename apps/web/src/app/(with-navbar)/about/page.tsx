const RESEARCH_FIELDS = [
  {
    title: '최신 기술 연구',
    items: ['SNS Analysis', 'Embedded Computing', 'Medical Information System']
  },
  {
    title: '시스템 개발',
    items: ['Technical Information System', 'System Development Methodology']
  },
  {
    title: '응용 분야',
    items: ['IS Philosophy', 'E-politics', 'Technology Resistance Model']
  }
]

const ABOUT_CONTENTS = {
  title: 'Information Systems',
  description: '경영과 IT의 융합을 통한 차세대 글로벌 경영 리더 양성'
}

const EDUCATIONAL_GOALS = [
  {
    title: '융합형 전문가 양성',
    description: '전산학, 경영학, 정보시스템을 아우르는 통합적 전문 역량 개발'
  },
  {
    title: '윤리적 인재 양성',
    description: '확고한 직업 윤리관과 가치관을 바탕으로 사회에 기여하는 인재 육성'
  },
  {
    title: '글로벌 인재 양성',
    description: '국제적 감각과 전문성을 겸비한 글로벌 비즈니스 리더 양성'
  },
  {
    title: '도전적 인재 양성',
    description: '창의적 문제해결 능력과 끊임없는 도전정신을 가진 인재 배출'
  }
]

const INTRODUCTION = {
  title: '학과 소개',
  description: `정보시스템학과는 경영학과 전산학의 혁신적인 융합을 통해 미래 산업을 선도할 인재를 양성합니다. 급변하는 디지털 시대에 발맞춰 경영·컴퓨터·정보시스템을 아우르는 통합적
  교육을 제공하며, 실무 중심의 프로젝트와 글로벌 역량 강화를 통해 차세대 디지털 비즈니스 리더를 육성합니다.`
}

export default function About() {
  return (
    <div className='w-full min-h-screen bg-background'>
      <div className='flex flex-col justify-center items-center h-[calc(100vh-var(--navbar-height))] px-4 md:px-8'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 text-center bg-gradient-to-r from-infosys-purple to-blue-600 bg-clip-text text-transparent'>{ABOUT_CONTENTS.title}</h1>
        <p className='text-xl md:text-2xl text-center max-w-3xl text-gray-600 leading-relaxed'>{ABOUT_CONTENTS.description}</p>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-24'>
        {/* Introduction */}
        <section className='space-y-8'>
          <h2 className='text-3xl md:text-4xl font-semibold text-infosys-purple text-center'>{INTRODUCTION.title}</h2>
          <div className='prose prose-lg max-w-none text-gray-700'>
            <p className='leading-relaxed'>{INTRODUCTION.description}</p>
          </div>
        </section>

        {/* Educational Goals */}
        <section className='space-y-8'>
          <h2 className='text-3xl md:text-4xl font-semibold text-infosys-purple text-center'>교육 목표</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {EDUCATIONAL_GOALS.map((goal, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
                <h3 className='text-xl font-semibold mb-4 text-infosys-purple'>{goal.title}</h3>
                <p className='text-gray-600'>{goal.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Paths */}
        <section className='space-y-8'>
          <h2 className='text-3xl md:text-4xl font-semibold text-infosys-purple text-center'>진로 분야</h2>
          <div className='bg-white p-8 rounded-xl shadow-lg'>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-xl font-semibold mb-4'>주요 직무</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li>• 시스템 분석가 / 디자이너</li>
                  <li>• IT 컨설턴트</li>
                  <li>• 시스템 감리사</li>
                  <li>• 비즈니스 애널리스트</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-4'>주요 취업 기업</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li>• IT 서비스: 삼성SDS, LG CNS, SK C&C</li>
                  <li>• 금융권: 신한은행, 삼성증권, 미래에셋</li>
                  <li>• 대기업: 삼성전자, 현대자동차, LG전자</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Fields */}
        <section className='space-y-8'>
          <h2 className='text-3xl md:text-4xl font-semibold text-infosys-purple text-center'>연구 분야</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {RESEARCH_FIELDS.map((field, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-lg'>
                <h3 className='text-xl font-semibold mb-4 text-infosys-purple'>{field.title}</h3>
                <ul className='space-y-2 text-gray-600'>
                  {field.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
