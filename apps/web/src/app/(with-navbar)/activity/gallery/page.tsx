import { GalleryType } from '@/types'
import { GalleryTable } from '@components/ui/gallery'

const gallery: GalleryType[] = [
  {
    galleryId: '14414',
    title: 'Gallery 1',
    description: 'Gallery 1 description',
    image: '/images/gallery1.jpg',
    created_at: '2024-01-15',
    updated_at: '2024-01-15',
    user_id: 'user1',
    userName: '신윤수',
    imageUrls: ['/images/gallery1.jpg', '/images/gallery2.jpg', '/images/gallery3.jpg']
  },
  {
    galleryId: '14415',
    title: 'Gallery 2',
    description: 'Gallery 2 description',
    image: '/images/gallery2.jpg',
    created_at: '2024-01-14',
    updated_at: '2024-01-14',
    user_id: 'user2',
    userName: '김철수',
    imageUrls: ['/images/gallery4.jpg', '/images/gallery5.jpg']
  },
  {
    galleryId: '14416',
    title: 'Gallery 3',
    description: 'Gallery 3 description',
    image: '/images/gallery3.jpg',
    created_at: '2024-01-13',
    updated_at: '2024-01-13',
    user_id: 'user3',
    userName: '이영희',
    imageUrls: ['/images/gallery6.jpg', '/images/gallery7.jpg']
  },
  {
    galleryId: '14417',
    title: 'Gallery 4',
    description: 'Gallery 4 description',
    image: '/images/gallery4.jpg',
    created_at: '2024-01-12',
    updated_at: '2024-01-12',
    user_id: 'user4',
    userName: '박지민',
    imageUrls: ['/images/gallery8.jpg', '/images/gallery9.jpg']
  },
  {
    galleryId: '14418',
    title: 'Gallery 5',
    description: 'Gallery 5 description',
    image: '/images/gallery5.jpg',
    created_at: '2024-01-11',
    updated_at: '2024-01-11',
    user_id: 'user5',
    userName: '최수진',
    imageUrls: ['/images/gallery10.jpg', '/images/gallery11.jpg']
  },
  {
    galleryId: '14419',
    title: 'Gallery 6',
    description: 'Gallery 6 description',
    image: '/images/gallery6.jpg',
    created_at: '2024-01-10',
    updated_at: '2024-01-10',
    user_id: 'user6',
    userName: '정민준',
    imageUrls: ['/images/gallery12.jpg', '/images/gallery13.jpg']
  },
  {
    galleryId: '14420',
    title: 'Gallery 7',
    description: 'Gallery 7 description',
    image: '/images/gallery7.jpg',
    created_at: '2024-01-09',
    updated_at: '2024-01-09',
    user_id: 'user7',
    userName: '강서연',
    imageUrls: ['/images/gallery14.jpg', '/images/gallery15.jpg']
  },
  {
    galleryId: '14421',
    title: 'Gallery 8',
    description: 'Gallery 8 description',
    image: '/images/gallery8.jpg',
    created_at: '2024-01-08',
    updated_at: '2024-01-08',
    user_id: 'user8',
    userName: '임현우',
    imageUrls: ['/images/gallery16.jpg', '/images/gallery17.jpg']
  },
  {
    galleryId: '14422',
    title: 'Gallery 9',
    description: 'Gallery 9 description',
    image: '/images/gallery9.jpg',
    created_at: '2024-01-07',
    updated_at: '2024-01-07',
    user_id: 'user9',
    userName: '한지은',
    imageUrls: ['/images/gallery18.jpg', '/images/gallery19.jpg']
  },
  {
    galleryId: '14423',
    title: 'Gallery 10',
    description: 'Gallery 10 description',
    image: '/images/gallery10.jpg',
    created_at: '2024-01-06',
    updated_at: '2024-01-06',
    user_id: 'user10',
    userName: '송태호',
    imageUrls: ['/images/gallery20.jpg', '/images/gallery21.jpg']
  },
  {
    galleryId: '14424',
    title: 'Gallery 11',
    description: 'Gallery 11 description',
    image: '/images/gallery11.jpg',
    created_at: '2024-01-05',
    updated_at: '2024-01-05',
    user_id: 'user11',
    userName: '윤서아',
    imageUrls: ['/images/gallery22.jpg', '/images/gallery23.jpg']
  },
  {
    galleryId: '14425',
    title: 'Gallery 12',
    description: 'Gallery 12 description',
    image: '/images/gallery12.jpg',
    created_at: '2024-01-04',
    updated_at: '2024-01-04',
    user_id: 'user12',
    userName: '조현진',
    imageUrls: ['/images/gallery24.jpg', '/images/gallery25.jpg']
  },
  {
    galleryId: '14426',
    title: 'Gallery 13',
    description: 'Gallery 13 description',
    image: '/images/gallery13.jpg',
    created_at: '2024-01-03',
    updated_at: '2024-01-03',
    user_id: 'user13',
    userName: '백승민',
    imageUrls: ['/images/gallery26.jpg', '/images/gallery27.jpg']
  },
  {
    galleryId: '14427',
    title: 'Gallery 14',
    description: 'Gallery 14 description',
    image: '/images/gallery14.jpg',
    created_at: '2024-01-02',
    updated_at: '2024-01-02',
    user_id: 'user14',
    userName: '류하은',
    imageUrls: ['/images/gallery28.jpg', '/images/gallery29.jpg']
  },
  {
    galleryId: '14428',
    title: 'Gallery 15',
    description: 'Gallery 15 description',
    image: '/images/gallery15.jpg',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
    user_id: 'user15',
    userName: '남도현',
    imageUrls: ['/images/gallery30.jpg', '/images/gallery31.jpg']
  },
  {
    galleryId: '14429',
    title: 'Gallery 16',
    description: 'Gallery 16 description',
    image: '/images/gallery16.jpg',
    created_at: '2023-12-31',
    updated_at: '2023-12-31',
    user_id: 'user16',
    userName: '오민서',
    imageUrls: ['/images/gallery32.jpg', '/images/gallery33.jpg']
  },
  {
    galleryId: '14430',
    title: 'Gallery 17',
    description: 'Gallery 17 description',
    image: '/images/gallery17.jpg',
    created_at: '2023-12-30',
    updated_at: '2023-12-30',
    user_id: 'user17',
    userName: '신준호',
    imageUrls: ['/images/gallery34.jpg', '/images/gallery35.jpg']
  },
  {
    galleryId: '14431',
    title: 'Gallery 18',
    description: 'Gallery 18 description',
    image: '/images/gallery18.jpg',
    created_at: '2023-12-29',
    updated_at: '2023-12-29',
    user_id: 'user18',
    userName: '권유진',
    imageUrls: ['/images/gallery36.jpg', '/images/gallery37.jpg']
  },
  {
    galleryId: '14432',
    title: 'Gallery 19',
    description: 'Gallery 19 description',
    image: '/images/gallery19.jpg',
    created_at: '2023-12-28',
    updated_at: '2023-12-28',
    user_id: 'user19',
    userName: '황민규',
    imageUrls: ['/images/gallery38.jpg', '/images/gallery39.jpg']
  },
  {
    galleryId: '14433',
    title: 'Gallery 20',
    description: 'Gallery 20 description',
    image: '/images/gallery20.jpg',
    created_at: '2023-12-27',
    updated_at: '2023-12-27',
    user_id: 'user20',
    userName: '서예린',
    imageUrls: ['/images/gallery40.jpg', '/images/gallery41.jpg']
  }
]

export default async function Gallery() {
  return (
    <div className='w-full h-screen pt-16'>
      <GalleryTable gallery={gallery} />
    </div>
  )
}
