import { useTranslation } from 'react-i18next';

type BookingButtonProps = {
  className?: string;
};

export default function BookingButton({ className }: BookingButtonProps) {
  const { t } = useTranslation();

  return (
    <a
      href="https://campio.no/nb/campsite/hov-hyttegrend?rid=60bfcc8567d01f20b7644593b9e5c8"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {t('common.bookingButton')}
    </a>
  );
}
