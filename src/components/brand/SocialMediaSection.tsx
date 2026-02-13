import { InstagramTemplates } from './social/InstagramTemplates';
import { FacebookLinkedInTemplates } from './social/FacebookLinkedInTemplates';
import { ProfilePhotoSection } from './social/ProfilePhotoSection';

export const SocialMediaSection = () => {
  return (
    <section className="py-16 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-coral-light rounded-full text-sm font-medium text-navy mb-4">
            Social Media
          </span>
          <h2 className="text-4xl font-display font-bold text-navy mb-4">
            Templates para Redes Sociais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modelos prontos para manter a consistência visual em todas as plataformas.
          </p>
        </div>

        <InstagramTemplates />
        <FacebookLinkedInTemplates />
        <ProfilePhotoSection />
      </div>
    </section>
  );
};
