---
title: Test your code with different Java versions
sidebar_position: 4
---

# Test your code with different Java versions

You can use Scala CLI to test your code compatibility with various versions of `java` (no manual installation of jdk or sdk is required). It automatically downloads the specified version of Java.

The following snippet uses the new method `Files.writeString` from Java 11.

```scala title=Main.scala
import java.nio.file.Files
import java.nio.file.Paths

object Main extends App {
  val dest = Files.createTempDirectory("scala-cli-demo").resolve("hello.txt")
  val filePath = Files.writeString(dest, "Hello from ScalaCli")
  val fileContent: String = Files.readString(filePath)
  println(fileContent)
}
```

Pass `--jvm` to the `scala-cli` command to run your application with the specified java version.

```bash ignore
scala-cli --jvm adopt:11 Main.scala
```

<!-- ignored Expected:
Hello from ScalaCli
-->

To test your application with Java 8, change the value of `--jvm` parameter.
```bash ignore fail
scala-cli --jvm 8 Main.scala
# In this case, it raises an error because the `Files.createTempFile` method is not available in java 8
#
# Exception in thread main: java.lang.Exception: java.lang.NoSuchMethodError: java.nio.file.Files.writeString(Ljava/nio/file/Path;Ljava/lang/CharSequence;[Ljava/nio/file/OpenOption;)Ljava/nio/file/Path;
#     at method print in modules/runner/src/main/scala-3-stable/scala/cli/runner/Stacktrace.scala:12 inside runner_3.jar
#     at method printException in modules/runner/src/main/scala/scala/cli/runner/StackTracePrinter.scala:91 inside runner_3.jar
#     at method main in modules/runner/src/main/scala/scala/cli/runner/Runner.scala:22 inside runner_3.jar
```

<!-- ignored Expected:
java.lang.NoSuchMethodError
java.nio.file.Files.writeString
-->
