package com.example.androidprojektcompose

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.Surface
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.androidprojektcompose.ui.theme.AndroidProjektComposeTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AndroidProjektComposeTheme {
                // A surface container using the 'background' color from the theme
                Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colors.background) {
                    Article(stringResource(R.string.heading), stringResource(R.string.first_Part_Of_Article), stringResource(R.string.second_Part_Of_Article))
                }
            }
        }
    }
}


@Composable
fun Article(heading: String, firstPartOfArticle: String, secondPartOfArticle: String, modifier: Modifier = Modifier) {
    val image = painterResource(R.drawable.bg_compose_background)
    Column {
        Image(
            painter = image,
            contentDescription = null
        )
        Text(
            text = heading,
            fontSize = 24.sp,
            modifier = Modifier
                .padding(start = 16.dp)
                .padding(end = 16.dp)
                .padding(bottom = 16.dp)
                .padding(top = 16.dp)

        )
        Text(
            text = firstPartOfArticle,
            textAlign = TextAlign.Justify,
            modifier = Modifier
                .padding(start = 16.dp)
                .padding(end = 16.dp)
        )
        Text(
            text = secondPartOfArticle,
            textAlign = TextAlign.Justify,
            modifier = Modifier
                .padding(start = 16.dp)
                .padding(end = 16.dp)
                .padding(bottom = 16.dp)
                .padding(top = 16.dp)
        )
    }
}


//@Composable
//fun ArticleText(heading: String, firstPartOfArticle: String, secondPartOfArticle: String, modifier: Modifier = Modifier) {
//    Column {
//        Text(
//            text = heading,
//            fontSize = 24.sp,
//            modifier = Modifier
//                .padding(start = 16.dp)
//                .padding(end = 16.dp)
//                .padding(bottom = 16.dp)
//                .padding(top = 16.dp)
//
//        )
//        Text(
//            text = firstPartOfArticle,
//            alignment = TextAlign.Justify,
//            modifier = Modifier
//                .padding(start = 16.dp)
//                .padding(end = 16.dp)
//        )
//        Text(
//            text = secondPartOfArticle,
//            modifier = Modifier
//                .padding(start = 16.dp)
//                .padding(end = 16.dp)
//                .padding(bottom = 16.dp)
//                .padding(top = 16.dp)
//        )
//    }
//
//}



@Composable
fun Greeting(name: String) {
    Text(text = "Hello $name!")
}




@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    AndroidProjektComposeTheme {
        Article(stringResource(R.string.heading), stringResource(R.string.first_Part_Of_Article), stringResource(R.string.second_Part_Of_Article))
    }
}