import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            // header
            headerShown: false,

            // tabBar
            tabBarIcon: () => null, //아이콘 없어지게
            tabBarActiveTintColor: '#66BB6A',
            tabBarStyle: {
                backgroundColor: '#E8F5E9'
            },
        }}>
        <Tabs.Screen 
            name="record"
            options={{
                title: '전체 기록 보기'
            }}
        />
        <Tabs.Screen
            name= "index"
            options={{
                title: '홈',
            }}
        />
        <Tabs.Screen
            name= "profile"
            options={{
                title: '프로필',
            }}
        />
    </Tabs>
    
  );
}
