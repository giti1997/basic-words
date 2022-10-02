import { ArrowForward } from '@mui/icons-material'
import { MenuItem, Select } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function Title() {
    return (
        <main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Travel Cheat Sheet
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="text.secondary"
                        paragraph
                    >
                        Well-organized survival information for when you're
                        making short trips into any country!
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Select
                            labelId="source-language-label"
                            id="source-language"
                            value={'English'}
                            label="Source"
                        >
                            <MenuItem value={'English'}>English</MenuItem>
                        </Select>
                        <ArrowForward></ArrowForward>
                        <Select
                            labelId="destination-language-label"
                            id="destination-language"
                            value={'Spanish'}
                            label="Destination"
                        >
                            <MenuItem value={'Spanish'}>Spanish</MenuItem>
                        </Select>
                    </Stack>
                </Container>
            </Box>
        </main>
    )
}
