import carouselEdu1 from '@/assets/brand/carousel-edu-1.png';
import carouselEdu2 from '@/assets/brand/carousel-edu-2.png';
import carouselEdu3 from '@/assets/brand/carousel-edu-3.png';
import carouselEdu4 from '@/assets/brand/carousel-edu-4.png';
import carouselEdu5 from '@/assets/brand/carousel-edu-5.png';
import { TemplateCard } from '../InstagramTemplates';

const slides = [
  { src: carouselEdu1, title: 'Slide 1 — Capa' },
  { src: carouselEdu2, title: 'Slide 2 — Frase' },
  { src: carouselEdu3, title: 'Slide 3 — Conteúdo' },
  { src: carouselEdu4, title: 'Slide 4 — Destaque' },
  { src: carouselEdu5, title: 'Slide 5 — CTA' },
];

export const CarouselPostTemplate = () => (
  <div className="grid grid-cols-5 gap-3 overflow-x-auto pb-2">
    {slides.map((slide) => (
      <TemplateCard key={slide.title} title={slide.title} size="1080 × 1080px">
        <div className="aspect-square rounded-xl overflow-hidden">
          <img
            src={slide.src}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      </TemplateCard>
    ))}
  </div>
);
