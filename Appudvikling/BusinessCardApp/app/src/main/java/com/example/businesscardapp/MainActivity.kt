package com.example.businesscardapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AlternateEmail
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Smartphone
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.sp
import com.example.businesscardapp.ui.theme.BusinessCardAppTheme
import org.intellij.lang.annotations.JdkConstants.HorizontalAlignment


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BusinessCardAppTheme {
                // A surface container using the 'background' color from the theme
                Surface(color = MaterialTheme.colors.background) {
                    ComposableBusinessCardApp()
                }
            }
        }
    }
}

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
              //  modifier = Modifier.align(Alignment.CenterHorizontally)
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
        val image = painterResource(R.drawable.logonyt)
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
            .padding(horizontal = 16.dp)
            .padding(bottom = 32.dp) // Add space from the bottom
            ) {

        Divider(color = Color.White, thickness = 1.dp, modifier = Modifier.fillMaxWidth()) // Add divider line
        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing


        ContactRow(
            icon = Icons.Default.Smartphone,
            text = phoneNumber
        )

        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing
        Divider(color = Color.White, thickness = 1.dp, modifier = Modifier.fillMaxWidth()) // Add divider line
        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing




        ContactRow(
            icon = Icons.Default.Email,
            text = email
        )
        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing
        Divider(color = Color.White, thickness = 1.dp, modifier = Modifier.fillMaxWidth()) // Add divider line
        Spacer(modifier = Modifier.height(8.dp)) // Add vertical spacing



        ContactRow(
            icon = Icons.Default.AlternateEmail,
            text = linkedInHandle
        )
    }
}

@Composable
fun ContactRow(
    icon: ImageVector,
    text: String
) {
    Row(
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            modifier = Modifier.size(24.dp)
        )
        Spacer(modifier = Modifier.width(8.dp)) // Add horizontal spacing

        Text(
            text = text,
            modifier = Modifier.weight(1f)
        )
    }
            //Divider(color = Color.White, thickness = 1.dp, modifier = Modifier.fillMaxWidth())

}



@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    BusinessCardAppTheme {
        ComposableBusinessCardApp()
    }
}