import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>About Stickyfy</Text>
        <Text style={styles.description}>
          Stickyfy is an innovative app that lets you upload images and customize them with fun, creative stickers. 
          Whether you're creating memes, personalizing photos, or just having fun, Stickyfy makes it easy and enjoyable.
        </Text>

        <Text style={styles.sectionTitle}>Features:</Text>
        <Text style={styles.feature}>
          - Upload images directly from your device.
        </Text>
        <Text style={styles.feature}>
          - Choose from a variety of stickers to add to your photos.
        </Text>
        <Text style={styles.feature}>
          - Save and share your creations with friends.
        </Text>

        <Text style={styles.sectionTitle}>How It Works:</Text>
        <Text style={styles.description}>
          1. Open the app and navigate to the editor page.
        </Text>
        <Text style={styles.description}>
          2. Upload an image from your gallery or take a new photo.
        </Text>
        <Text style={styles.description}>
          3. Select a sticker and drag it onto your photo.
        </Text>
        <Text style={styles.description}>
          4. Save your customized image and share it with the world!
        </Text>

        <Text style={styles.sectionTitle}>Contact Us:</Text>
        <Text style={styles.description}>
          Have questions or feedback? We'd love to hear from you! 
          Reach out to us at support@stickyfyapp.com.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  content: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f80e0',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#ddd',
    lineHeight: 22,
    marginBottom: 10,
  },
  feature: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 22,
    marginLeft: 10,
    marginBottom: 5,
  },
});
