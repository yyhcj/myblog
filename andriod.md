# Android期中实验
## 时间戳
1. 在notelist.java中
   找到这个  private static final String[] PROJECTION = new String[] {
            NotePad.Notes._ID, // 0
            NotePad.Notes.COLUMN_NAME_TITLE, // 1
            NotePad.Notes.COLUMN_NAME_CREATE_DATE// 1
    };
    其中 NotePad.Notes.COLUMN_NAME_CREATE_DATE// 1是要添加的
    找到 String[] dataColumns = { NotePad.Notes.COLUMN_NAME_TITLE,NotePad.Notes.COLUMN_NAME_CREATE_DATE} ;
        // The view IDs that will display the cursor columns, initialized to the TextView in
        // noteslist_item.xmltry / catch
        int[] viewIDs = { android.R.id.text1, R.id.text_time };
        其中,NotePad.Notes.COLUMN_NAME_CREATE_DATE，, R.id.text_time是要添加的
2. 把notelist_item.xml改为

   ```<?xml version="1.0" encoding="utf-8"?>```
```<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:orientation="horizontal"
    android:layout_height="match_parent">

    <TextView xmlns:android="http://schemas.android.com/apk/res/android"
        android:id="@android:id/text1"
        android:layout_width="0dp"
        android:layout_weight="1"
        android:layout_height="?android:attr/listPreferredItemHeight"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:gravity="center_vertical"
        android:paddingLeft="5dip"
        android:singleLine="true" />

    <TextView xmlns:android="http://schemas.android.com/apk/res/android"
        android:id="@+id/text_time"
        android:layout_width="0dp"
        android:layout_weight="1"
        android:layout_height="?android:attr/listPreferredItemHeight"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:gravity="center_vertical"
        android:paddingLeft="5dip"
        android:singleLine="true" />
</LinearLayout>
```
3. 时间格式化
   
## 搜索功能
1. 新建一个search.java在java文件夹里
   package com.example.android.notepad;

import android.app.Activity;
import android.os.Bundle;
public class search extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.search);
    }
}

2. 新建一个search.xml
   ```<?xml version="1.0" encoding="utf-8"?>```
```<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp"
    android:gravity="center_horizontal">

    <!-- 输入框 -->
    <EditText
        android:id="@+id/editText_search"
        android:layout_width="match_parent"
        android:layout_height="50dp"
        android:hint="请输入搜索内容"
        android:textSize="16sp"
        android:padding="8dp"
        android:textColor="@android:color/white"
        android:backgroundTint="@android:color/white">
</EditText>
    <!-- 搜索按钮 -->
<Button
android:id="@+id/button_search"
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:text="搜索"
android:textSize="18sp"
android:layout_marginTop="16dp">
</Button>

    </LinearLayout>```
3. 新建一个color.xml在res文件夹的value文件夹里
  <?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- 黑色 -->
    <color name="black">#000000</color>
    <!-- 白色 -->
    <color name="white">#FFFFFF</color>
    <!-- 灰色 -->
    <color name="gray">#808080</color>
    <!-- 浅灰色 -->
    <color name="light_gray">#D3D3D3</color>
    <!-- 深灰色 -->
    <color name="dark_gray">#424242</color>
    <!-- 红色 -->
    <color name="red">#FF0000</color>
    <!-- 绿色 -->
    <color name="green">#00FF00</color>
    <!-- 蓝色 -->
    <color name="blue">#0000FF</color>
    <!-- 黄色 -->
    <color name="yellow">#FFFF00</color>
    <!-- 透明色 -->
    <color name="transparent">#00000000</color>
</resources>
   
4. 在nodelist.java中找到
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
        case R.id.menu_add:
          /*
           * Launches a new Activity using an Intent. The intent filter for the Activity
           * has to have action ACTION_INSERT. No category is set, so DEFAULT is assumed.
           * In effect, this starts the NoteEditor Activity in NotePad.
           */
           startActivity(new Intent(Intent.ACTION_INSERT, getIntent().getData()));
           return true;
        case R.id.menu_search:
            Intent intent1 = new Intent(NotesList.this, search.class);
            startActivity(intent1);
           return true;
        case R.id.menu_paste:
          /*
           * Launches a new Activity using an Intent. The intent filter for the Activity
           * has to have action ACTION_PASTE. No category is set, so DEFAULT is assumed.
           * In effect, this starts the NoteEditor Activity in NotePad.
           */
          startActivity(new Intent(Intent.ACTION_PASTE, getIntent().getData()));
          return true;
        default:
            return super.onOptionsItemSelected(item);
        }
    }
    其中 case R.id.menu_search:
            Intent intent1 = new Intent(NotesList.this, search.class);
            startActivity(intent1);
           return true;是修改的部分
5.