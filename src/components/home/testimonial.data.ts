import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Freelancing se income start ho gayi',
    content:
      'Milestone mein Digital Marketing course kiya. Teachers practical projects karwate hain. Ab main Upwork pe clients handle kar raha hoon aur apni pehli earning bhi start ho chuki hai. Jaranwala mein itna solid institute milna bohot rare hai.',
    user: {
      id: 1,
      name: 'Ali Raza',
      professional: 'Digital Marketing Student — Faisalabad',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Web Development ne career badal diya',
    content:
      'Pehle coding se darr lagta tha, lekin yahan step-by-step samjhaya gaya. Web Development course ke baad main websites bana sakta hoon aur local clients se projects bhi milne lage hain. Highly recommended!',
    user: {
      id: 2,
      name: 'Hassan Ahmed',
      professional: 'Web Development Student — Jaranwala',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Spoken English confidence boost',
    content:
      "Oxford's Advanced Spoken English course ne meri speaking improve kar di. British aur American accent practice se interviews mein confidence aa gaya. Teachers bohot supportive hain.",
    user: {
      id: 3,
      name: 'Ayesha Khan',
      professional: 'Spoken English Student — Sheikhupura',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'IELTS preparation on point',
    content:
      'IELTS / PTE preparation yahan structured hai — reading, writing, listening, speaking sab cover hota hai. Mera band score improve hua aur abroad plans clear ho gaye. Thank you Milestone team!',
    user: {
      id: 4,
      name: 'Usman Malik',
      professional: 'IELTS Student — Lahore',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Graphic Designing se freelance start',
    content:
      'Basic Computer se shuru kiya, phir Graphic Designing complete ki. Ab Canva aur Adobe tools se logos aur social posts banata hoon. Institute ka environment friendly hai aur admission process bhi asaan tha.',
    user: {
      id: 5,
      name: 'Fatima Noor',
      professional: 'Graphic Designing Student — Jaranwala',
      photo: '5.jpg',
    },
  },
]
