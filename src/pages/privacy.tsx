import { useTranslation } from 'react-i18next';
import renderTextWithParagraphs from '../utils/renderTextWithParagraphs';

export default function PrivacyPolicy() {
  const { t } = useTranslation(['translation', 'privacy']);

  return (
    <div className="terms-privacy bg-primary">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-secondary mb-2">
          {t('privacy:privacyPage.title')}
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-8">
          {t('privacy:privacyPage.updated')}
        </p>

        <div className="flex flex-col justify-center gap-6 ">
          <p className="mb-8 text-base md:text-lg">{t('privacy:privacyPage.intro')}</p>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('privacy:privacyPage.part_1.title')}
            </h2>
            <div className="mb-4">
              {renderTextWithParagraphs(t('privacy:privacyPage.part_1.text'))}
            </div>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>{t('privacy:privacyPage.part_1.listItem1')}</li>
              <li>{t('privacy:privacyPage.part_1.listItem2')}</li>
              <li>{t('privacy:privacyPage.part_1.listItem3')}</li>
            </ul>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('privacy:privacyPage.part_2.title')}
            </h2>
            <div className="mb-4">
              {renderTextWithParagraphs(t('privacy:privacyPage.part_2.text'))}
            </div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('privacy:privacyPage.part_3.title')}
            </h2>
            <div className="mb-4">
              {renderTextWithParagraphs(t('privacy:privacyPage.part_3.text'))}
            </div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('privacy:privacyPage.part_4.title')}
            </h2>
            <div className="mb-4">
              {renderTextWithParagraphs(t('privacy:privacyPage.part_4.text'))}
            </div>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>{t('privacy:privacyPage.part_4.listItem1')}</li>
              <li>{t('privacy:privacyPage.part_4.listItem2')}</li>
            </ul>
            <p>{t('privacy:privacyPage.part_4.text2')}</p>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('privacy:privacyPage.contactInfo.title')}
            </h2>
            <p className="mb-2">{t('privacy:privacyPage.contactInfo.intro')}</p>
            <p className="font-semibold">{t('privacy:privacyPage.contactInfo.name')}</p>
            <p>{t('privacy:privacyPage.contactInfo.email')}</p>
            <p>{t('privacy:privacyPage.contactInfo.phone')}</p>
            <p>{t('privacy:privacyPage.contactInfo.address')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
