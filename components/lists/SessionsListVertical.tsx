import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, StyleSheet, View } from 'react-native';
import SessionListSeparator from '../../assets/artworks/ListSeparator';
import type { SessionForSchedule } from '../../global';
import SessionCard from '../cards/SessionCard';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

/**
 * @param variant: 'card' | 'list'
 * @param bookmarked: boolean
 * @param handleBookMark: () => void
 */

interface SessionListProps<T> {
  variant?: 'card' | 'list';
  bookmarked?: boolean;
  handleBookMark?: () => void;
  sessions: Array<T>;
}

const SessionsListVertical = ({
  variant = 'card',
  bookmarked = false,
  sessions,
  handleBookMark,
}: SessionListProps<SessionForSchedule>) => {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <View style={styles.list} testID="sessions-list-vertical">
      <Row>
        <StyledText font="bold" size="lg" style={{ color: colors.primary }}>
          {bookmarked ? 'All Sessions' : 'My Sessions'}
        </StyledText>
      </Row>

      <Space size={16} />
      <FlatList
        data={sessions}
        renderItem={({ item }: ListRenderItemInfo<SessionForSchedule>) => (
          <SessionCard
            handlePress={() => router.replace({ pathname: `/session/${item.slug}`, params: { slug: item.slug } })}
            item={item}
            handleBookMark={handleBookMark}
            screen={'sessions'}
            variant={variant === 'card' ? 'card' : 'list'}
          />
        )}
        keyExtractor={(item: SessionForSchedule) => item.slug + item.id}
        ItemSeparatorComponent={(props) =>
          variant === 'card' ? (
            <Space size={20} />
          ) : (
            <>
              {console.log(props)}
              <View style={styles.cardContainer}>
                <SessionListSeparator color={props.leadingItem.id % 2 === 0 ? colors.tertiary : colors.tint} />
              </View>
            </>
          )
        }
      />
    </View>
  );
};

export default SessionsListVertical;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listHolder: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardContainer: { marginLeft: 50, marginVertical: 6 },
});