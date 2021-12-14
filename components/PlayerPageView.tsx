import { useUserIsAuthenticated } from 'common/hooks/userIsAuthenticated';
import PlayerView from 'components/PlayerView';
import SplashView from 'components/SplashView';

const PlayerPageView = () => {
  const { isAuthenticated } = useUserIsAuthenticated();

  return !isAuthenticated ? <SplashView /> : <PlayerView />;
};

export default PlayerPageView;
