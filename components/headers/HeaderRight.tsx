import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import Avatar from '../buttons/Avatar';
import FeedbackButton from '../buttons/FeedbackButton';
import Row from '../common/Row';

const HeaderRight = () => {
  const router = useRouter();
  return (
    <Row style={styles.row}>
      <FeedbackButton onPress={() => router.push('/feedback')} />
      <Avatar />
    </Row>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
});