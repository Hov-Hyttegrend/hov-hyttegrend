import { useTranslation } from 'react-i18next';
import renderTextWithParagraphs from '../utils/renderTextWithParagraphs';

export default function TermsAndConditions() {
  const { t } = useTranslation();

  return (
    <div className="terms-privacy bg-primary">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-secondary mb-2">
          {t('termsPage.title')}
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-2">
          {t('termsPage.description')}
        </p>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-8">
          {t('termsPage.adress')}
        </p>

        <div className="flex flex-col justify-center gap-6 ">
          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_1.title')}
            </h2>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_1.text'))}</div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_2.title')}
            </h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>{t('termsPage.part_2.listItem1')}</li>
              <li>{t('termsPage.part_2.listItem2')}</li>
              <li>{t('termsPage.part_2.listItem3')}</li>
            </ul>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_3.title')}
            </h2>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_3.text'))}</div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_4.title')}
            </h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>{t('termsPage.part_4.listItem1')}</li>
              <li>{t('termsPage.part_4.listItem2')}</li>
            </ul>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_4.text'))}</div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_5.title')}
            </h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>{t('termsPage.part_5.listItem1')}</li>
              <li>{t('termsPage.part_5.listItem2')}</li>
            </ul>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_5.text'))}</div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_6.title')}
            </h2>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_6.text1'))}</div>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_6.text2'))}</div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_7.title')}
            </h2>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_7.text'))}</div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_8.title')}
            </h2>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_8.text'))}</div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_9.title')}
            </h2>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_9.text'))}</div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.part_10.title')}
            </h2>
            <div className="mb-4">{renderTextWithParagraphs(t('termsPage.part_10.text'))}</div>
          </section>

          <section className="">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-secondary mb-4">
              {t('termsPage.contactInfo.title')}
            </h2>
            <p className="font-semibold">{t('termsPage.contactInfo.name')}</p>
            <p>{t('termsPage.contactInfo.street')}</p>
            <p>{t('termsPage.contactInfo.postal')}</p>
            <p>{t('termsPage.contactInfo.email')}</p>
            <p>{t('termsPage.contactInfo.phone')}</p>
            <p>{t('termsPage.contactInfo.website')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
