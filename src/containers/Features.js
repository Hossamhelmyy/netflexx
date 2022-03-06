import { Features } from '../components/features/index';
import { OptFormContainer } from './optFormContainer';

export default function FeaturesContainer() {
  return (
    <Features>
      <Features.Title>Unlimited movies, TV shows, and more.</Features.Title>
      <Features.SubTitle>Watch anywhere. Cancel at any time.</Features.SubTitle>
      <OptFormContainer />
    </Features>
  );
}
