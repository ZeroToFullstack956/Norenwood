import { useState, useEffect, useRef, useMemo } from 'react';
import { Box, Button, Input, List, ListItem, Text, VStack, HStack, Flex, Spinner, Checkbox, Link, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export const ScoresBoard = ({ speed, mph, phoneModel, setPhoneModel, isChecked }) => {
  const [email, setEmail] = useState('');
  const [highScoresMPH, setHighScoresMPH] = useState([]);
  const [highScoresRPM, setHighScoresRPM] = useState([]);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [currentScore, setCurrentScore] = useState({ mph: 0, rpm: 0 });
  const [mostRecentScore, setMostRecentScore] = useState({ mph: 0, rpm: 0 });
  const [isSpinning, setIsSpinning] = useState(false);  // keeps track of whether the spin is currently in progress.
  const angularSpeedRPM = speed * (60 / (2 * Math.PI));  // Convert rad/s to RPM  // Convert rad/s to RPM
  const [isModalOpen, setIsModalOpen] = useState(false);
  const spinThreshold = 0.001;
  const hasStoppedSpinning = useRef(false);

//   useEffect(() => {
//       const interval = setInterval(checkScores, 60 * 1000); // checks every 60 seconds
  
//       // Cleanup function to clear the interval when the component unmounts
//       return () => clearInterval(interval);
//     }, [angularSpeedRPM, mph]);

useEffect(() => {   // to-do fix this use-effect logic when your not braindead, its not resetting the ref to false
  // prevents infinite loop
  console.log(hasStoppedSpinning.current)
  if (hasStoppedSpinning.current) {
    return;
  }
  
  console.log(`Current Speed: ${speed}, isSpinning: ${isSpinning}`);
  if (speed > spinThreshold && !isSpinning) {
      setIsSpinning(true);
      setCurrentScore({ mph: 0, rpm: 0 });
      hasStoppedSpinning.current = false; // Reset the ref to false as spinning starts
  } else if (speed <= spinThreshold && isSpinning && !isChecked) {
      setIsSpinning(false);
      setIsModalOpen(true); // Open the modal
      hasStoppedSpinning.current = true;  // Set the flag to true to prevent additional updates

      console.log('Spinning stopped');
  }

  if (isSpinning) {
      setCurrentScore(prevScore => ({
          mph: Math.max(prevScore.mph, mph),
          rpm: Math.max(prevScore.rpm, angularSpeedRPM)
      }));
  }
  
  }, []);
  // need to know when speed becomes 0 to update the most recent score and reset the current score.
      

  function checkScores() {
    // Check top MPH scores
    if (mph > highScoresMPH[highScoresMPH.length - 1]?.score) {
      const newScoreMPH = { email: 'Automatic', score: mph };
      setHighScoresMPH((scores) => [...scores, newScoreMPH]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10));  // only keep top 10 scores
    }

    // Check top RPM scores
    if (angularSpeedRPM > highScoresRPM[highScoresRPM.length - 1]?.score) {
      const newScoreRPM = { email: 'Automatic', score: angularSpeedRPM };
      setHighScoresRPM((scores) => [...scores, newScoreRPM]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10));  // only keep top 10 scores
    }
  }

    // placeholder for the actual IndexedDB operations
    function saveToIndexedDB(data) {
        // This should contain the actual operations to save to the IndexedDB
        // But for now, it just logs the data to the console
        console.log('Saving to IndexedDB:', data);
        // Placeholder for API call:
        fetch('endEndpointHere', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }

  function submitScore() {
    if (!acceptTerms) {         // for terms an conditions to keep emails
      alert('You need to accept the terms and conditions');
      return;
    }
      // High scores for MPH
    if (highScoresMPH.length < 5 || currentScore.mph > highScoresMPH[highScoresMPH.length - 1].score) {
    const newScoreMPH = { email, score: currentScore.mph };
    setHighScoresMPH((scores) => [...scores, newScoreMPH] // set the score in the array of scores
      .sort((a, b) => b.score - a.score)                  // sort the list
      .slice(0, 5));                                      // only keep top 5 scores
    }
      // High scores for RPM
    if (highScoresRPM.length < 5 || currentScore.rpm > highScoresRPM[highScoresRPM.length - 1].score) {
    const newScoreRPM = { email, score: currentScore.rpm };
    setHighScoresRPM((scores) => [...scores, newScoreRPM]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5));  // only keep top 5 scores
    }

    //  function placeholder for the actual IndexedDB operation saveToIndexedDB()
    saveToIndexedDB({ highScoresMPH, highScoresRPM });

      // Reset current score
    setCurrentScore({ mph: null, rpm: null });
  }

  const handleModalClose = (confirm) => {
    setIsModalOpen(false);
    if (confirm) {
      setMostRecentScore(currentScore);
    }
  };
  
  return (  
    <>
    <Flex alignItems="center" justifyContent="flex-start"  flexDirection="row" transform="translateX(-45%)" >
      <Box flex={1}  
      height={{ base: "0vh", sm: "0vh", md: "10vh", lg: "15vh", xl: "15vh" }} 
      width={{ base: "0vw", sm: "0vw", md: "5vw", lg: "5vw", xl: "5vw" }} />
      <HStack 
        flex={1}
        p={1}
        spacing={2} // Set spacing to 0 to remove space between items
        align="stretch"
        width={{ base: '55%', md: '45%' }}
        
        >
        <Box fontSize="small" border="1px" borderRadius="lg">
          <Text>
            <u>Rotation:</u> {angularSpeedRPM.toFixed(2)} RPM
        </Text>
          <Text>
            <u>Angular Speed:</u>{mph.toFixed(2)} mph
        </Text>
          {/* <Text>
            <u>This Turn:</u>
        </Text>
            <Text>
                <u>RPM:</u> { currentScore.rpm ? currentScore.rpm.toFixed(1) : "N/A" }
            </Text>
            <Text>
                <u>MPH:</u> { currentScore.mph ? currentScore.mph.toFixed(1) : "N/A" }
            </Text> */}
            <Text>
                <u>Last Turn:</u>
            </Text>
            <Text>
                <u>RPM:</u> { mostRecentScore.rpm ? mostRecentScore.rpm.toFixed(1) : "N/A" }
            </Text>
            <Text>
                <u>MPH:</u> { mostRecentScore.mph ? mostRecentScore.mph.toFixed(1) : "N/A" }
            </Text>
        </Box>
        <Box>
      <Text color="gray.700" fontWeight="bold" letterSpacing="wide" >
        {isSpinning ? <Spinner/> : "Spin complete."}
    </Text>
          <Text fontSize="s" width="120px">
            <u>Click it 🖱️ Spin it..</u>
          </Text>
          <Select value={phoneModel} onChange={(e) => setPhoneModel(e.target.value)}>
            <option value="iPhone15_proMax">iPhone 15 proMax</option>
            <option value="SamsungS22_Ultra5G">Samsung S22 Ultra5G</option>
            <option value="Google_Pixel6">Google Pixle 6</option>
          </Select>

          {/* <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email..." />

          <Checkbox  isChecked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)}>
            <Link href="/terms" fontSize="xs" color="blue.500" > <u>Privacy & Terms</u> </Link>
          </Checkbox> */}

          {/* disable button condition to check if currentScore.mph and currentScore.rpm are null: */}
          {/* <Button 
            m={1} 
            boxShadow="xl" 
            borderRadius="lg" 
            bg="blue.200" 
            onClick={submitScore} 
            disabled={isSpinning || currentScore.mph === 0 || currentScore.rpm === 0}>Submit Score
          </Button> */}
        </Box>
        {/* <Box 
            border="1px" 
            padding="2" 
            borderRadius="lg">
          <Text color="blue.500"><Link>High Scores <u>(MPH):</u></Link></Text>
          <List>
            {highScoresMPH.map((score, i) => (
              <ListItem key={i}>{score.email}: {score.score.toFixed(2)} mph</ListItem>
            ))}
          </List>
          <Text color="blue.500"><Link>High Scores <u>(RPM):</u></Link></Text>
          <List>
            {highScoresRPM.map((score, i) => (
              <ListItem key={i}>{score.email}: {score.score.toFixed(2)} RPM</ListItem>
            ))}
          </List>
        </Box> */}
      </HStack>
    </Flex>
{/* start of modal */}

    <Modal isOpen={isModalOpen} onClose={() => handleModalClose(false)}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Confirm Score</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Do you want to keep this score?</Text>
        <Text fontSize="lg" mt={4}>
          Speed: {currentScore.mph.toFixed(2)} mph
        </Text>
        <Text fontSize="lg">
          Rotation: {currentScore.rpm.toFixed(2)} RPM
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={() => handleModalClose(true)}>
          Yes
        </Button>
        <Button variant="ghost" onClick={() => handleModalClose(false)}>
          No
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
    </>
  );
}
