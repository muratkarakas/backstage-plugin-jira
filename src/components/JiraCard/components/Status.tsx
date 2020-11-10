/*
 * Copyright 2020 RoadieHQ
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { Box, Typography, makeStyles, createStyles, } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    subtitles: {
      lineHeight: 0,
    },
  }),
);

export const Status = ({name, iconUrl} : {name: string, iconUrl: string}) => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
      <img src={iconUrl} alt="" />
      <Box ml={1}>
        <Typography variant="subtitle2" className={classes.subtitles}>
          {name}
        </Typography>
      </Box>
    </Box>
  )
}