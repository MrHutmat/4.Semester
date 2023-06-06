package com.example.rebuildofbusinesscardapp.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.text.ClickableText
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AlternateEmail
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Smartphone
import androidx.compose.material3.Divider
import androidx.compose.material3.Icon
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.rebuildofbusinesscardapp.R
import com.example.rebuildofbusinesscardapp.ui.theme.RebuildOfBusinessCardAppTheme

@Composable
fun ComposableBusinessCardApp() {
    Surface(color = Color(0xFF4C5270), modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally // Center the content horizontally
        ) {
            Spacer(modifier = Modifier.weight(1f)) // Add space to center content

            InformationCard(
                fullName = stringResource(R.string.full_name),
                title = stringResource(R.string.title),
                modifier = Modifier.align(Alignment.CenterHorizontally)
            )

            Spacer(modifier = Modifier.weight(1f)) // Add space to center content

            ContactInfo(
                phoneNumber = stringResource(R.string.phone_number),
                email = stringResource(R.string.email),
                linkedInHandle = stringResource(R.string.linkedin_handle),


                )

        }
    }
}


//val image = painterResource(R.drawable.logonyt)


@Composable
fun InformationCard(
    fullName: String,
    title: String,
    modifier: Modifier = Modifier

) {
    Column(
        modifier = modifier,
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        val image = painterResource(R.drawable.logonewtest)
        //Spacer(modifier = Modifier.padding(top = 64.dp)) // Increase the top padding for logo positioning

        Image(
            painter = image,
            contentDescription = null,
            modifier = Modifier
                .size(250.dp)
                .padding(bottom = 16.dp)
        )
        Text(
            text = fullName,
            fontSize = 35.sp,
            fontWeight = FontWeight.Bold,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(bottom = 8.dp)
        )
        Text(
            text = title,
            fontSize = 20.sp,
            fontWeight = FontWeight.Normal,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(bottom = 16.dp)
        )
    }

}

@Composable
fun ContactInfo(
    phoneNumber: String,
    email: String,
    linkedInHandle: String,
    modifier: Modifier = Modifier
) {

    Column (
        modifier = modifier
            .fillMaxWidth()
            //  .padding(horizontal = 16.dp)
            .padding(bottom = 32.dp) // Add space from the bottom
    ) {

        Divider(color = Color.White, thickness = 1.dp, modifier = Modifier.fillMaxWidth()) // Add divider line
        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing


        ContactRow(
            icon = Icons.Default.Smartphone,
            text = phoneNumber,
            uri = "+4550430371"
        )

        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing
        Divider(color = Color.White, thickness = 1.dp, modifier = Modifier.fillMaxWidth()) // Add divider line
        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing




        ContactRow(
            icon = Icons.Default.Email,
            text = email,
            uri = "https://www.youtube.com/"
        )
        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing
        Divider(color = Color.White, thickness = 1.dp, modifier = Modifier.fillMaxWidth()) // Add divider line
        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing



        ContactRow(
            icon = Icons.Default.AlternateEmail,
            text = linkedInHandle,
            uri = "https://www.linkedin.com/in/mathias-helsengren-1231b9139/"

        )
    }
}

@Composable
fun ContactRow(
    icon: ImageVector,
    text: String,
    modifier: Modifier = Modifier,
    uri: String,


    ) {
    Row(
        modifier = modifier.padding(horizontal = 30.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        val uriHandler = LocalUriHandler.current

        Icon(
            imageVector = icon,
            contentDescription = null,
            modifier = Modifier.size(24.dp)
        )
        Spacer(modifier = Modifier.width(8.dp)) // Add horizontal spacing

        ClickableText(
            text = AnnotatedString(text),
            modifier = Modifier.weight(1f),
            onClick = {
                uriHandler.openUri(uri)
            })

    }
}
@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    RebuildOfBusinessCardAppTheme {
        ComposableBusinessCardApp()
    }
}