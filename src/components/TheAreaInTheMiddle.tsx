import { Container, Spacer, Spinner, Text } from '@chakra-ui/react';
import { useContextStore } from '../store/useContextStore';
import { OutputSegmentsList } from './OutputSegmentsList';
import { StartNewProcessMenu } from './StartNewProcessMenu';

export function TheAreaInTheMiddle() {
  return (
    <Container
      maxW='container.xl'
      display='relative'
      key='TaskOutputArea'
    >
      <Spacer h='5dvh' />
      <TheContent />
      <Spacer h='25dvh' />
    </Container>
  );
}

function TheContent() {
  const { backendState, outputSegments } = useContextStore();
  return (
    <>
      <OutputSegmentsList />
      {!backendState?.activeProcessRunning || !outputSegments.length ? (
        <StartNewProcessMenu />
      ) : null}
    </>
  );
}
