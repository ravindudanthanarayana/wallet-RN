import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '@/constants/colors'; // Make sure this matches the actual file name

const SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets(); // ✅ Call the hook

  return (
    <View style={{ paddingTop: insets.top, flex: 1, backgroundColor: COLORS.background }}>
      {children}
    </View>
  );
};

export default SafeScreen;