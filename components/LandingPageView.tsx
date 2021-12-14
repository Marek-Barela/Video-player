import { useUserIsAuthenticated } from 'common/hooks/userIsAuthenticated';
import HomeView from 'components/HomeView';
import SplashView from 'components/SplashView';

const LandingPageView = () => {
  const { isAuthenticated } = useUserIsAuthenticated();

  return !isAuthenticated ? <SplashView /> : <HomeView />;
};

export default LandingPageView;
