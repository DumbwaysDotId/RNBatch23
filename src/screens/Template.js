import React from "react";
import { FormControl, Input, Stack, Center } from "native-base";

function Template() {
  return (
    <Center flex={1}>
      <FormControl isRequired isInvalid>
        <Stack mx={4}>
          <FormControl.Label>Favorite framework</FormControl.Label>
          <Input p={2} placeholder="Is it react?" />
          <FormControl.HelperText>
            We'll keep this between us.
          </FormControl.HelperText>
          <FormControl.ErrorMessage>
            Something is wrong.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Center>
  );
}

export default Template;
