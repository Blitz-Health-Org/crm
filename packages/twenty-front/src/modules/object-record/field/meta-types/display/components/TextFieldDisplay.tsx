import { TextDisplay } from '@/ui/field/display/components/TextDisplay';

import { useTextField } from '../../hooks/useTextField';

export const TextFieldDisplay = () => {
  const { fieldValue, maxWidth } = useTextField();

  console.log('whattt', fieldValue);

  return <TextDisplay text={fieldValue} maxWidth={maxWidth} />;
};
