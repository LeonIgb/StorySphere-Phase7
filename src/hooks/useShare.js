import { useCallback } from 'react';
import { useNotice } from '../context/NoticeContext';
import { shareStory } from '../utils/share';

// Returns share(story). Opens the native share sheet, or shows the text when sharing isn't supported.
export default function useShare() {
  const { showNotice } = useNotice();
  return useCallback(
    async (story) => {
      if (!story) return;
      const result = await shareStory(story);
      if (result.status === 'unsupported') {
        showNotice(
          'Sharing isn’t available here',
          `This device or preview can’t open a share sheet. You can copy this instead:\n\n${result.message}`,
          'share-social-outline'
        );
      }
    },
    [showNotice]
  );
}
