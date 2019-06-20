---
title:  "Setting Up WordPress Coding Standards in Visual Studio Code"
date:   2019-06-20 10:44:28 -0300
categories: wordpress vscode tutorial
image: wpcs-on-visual-studio-code.jpg
description: Learn how to configure phpcbf in Visual Studio Code and formatting your code with WordPress Coding Standards
---

## Introdution

Coding Standards are collections of best practices for writing codes, 
most likely you will find them in the documentation of your favorite programming language.

In [WordPress][wporg]{:target="_blank"} (in this case a CMS, not a programming language) 
is no different, we can find through [this link][wpcs]{:target="_blank"} 
a collection of rules and best practices to develop themes and plugins.

In this article I will show you how to configure [Visual Studio Code][vscode]{:target="_blank"}
to format your code and always make it beautiful according to the WordPress Coding Standards.

## Prerequisites

Make sure you have the following installed on your computer:
- Visual Studio Code (obvioulsy)
- PHP
- [Composer][install-composer]{:target="_blank"}

## Let's start

After ensuring that all the prerequisites have been met, let's go to what matters:

{% highlight shell %}
# Installs required version of PHP CodeSniffer, according to WPCS requirements
$ composer global require squizlabs/php_codesniffer:3.4.*

# Make it globally accessible in your PATH
$ export PATH=~/.composer/vendor/bin:$PATH

# Verify that it's installed correctly by running phpcbf --version.
$ phpcbf --version
{% endhighlight %}

<small>If you received permission error when installing a dependency, 
[set the composer permissions][gist-composer-permissions]{:target="_blank"}</small>

Now that we have been able to use `phpcbf` and `phpcs`, we need to 
configure what Coding Standard we want:

{% highlight shell %}
# Clone the WordPress standards repository:
$ git clone -b master https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards.git wpcs

# Add its path to the PHP_CodeSniffer configuration:
$ phpcbf --config-set installed_paths /path/to/wpcs
{% endhighlight %}

If we stop here, we'll be able to format our code through the command line:

{% highlight shell %}
phpcbf --standard=WordPress --extensions=php /path/to/php/files
{% endhighlight %}

But what we want, is with a simple keyboard shortcut, make it happen directly from our code editor.

To achieve this, we need to install the `phpcbf` extension in the 
Visual Studio Code ([available at this link][vscode-phpcbf]{:target="_blank"}), 
and configure the following:

{% highlight json %}
{
    "phpcbf.executablePath": "~/.composer/vendor/bin/phpcbf",
    "phpcbf.standard": "WordPress",
}
{% endhighlight %}

Now, using a Visual Studio Code shortcut (or context menu), we have already been able 
to meet the WordPress code pattern requirements.

![Formatting code in Visual Studio Code with WordPress Coding Standards][formatting]{:align="center"}

[wpcs]: https://codex.wordpress.org/WordPress_Coding_Standards
[vscode]: https://code.visualstudio.com/
[vscode-phpcbf]: https://marketplace.visualstudio.com/items?itemName=persoderlind.vscode-phpcbf
[gist-composer-permissions]: https://gist.github.com/flschaves/23190e6b1e51371a70a00a99913fce6e#file-composer-permissions-error-txt
[wporg]: https://wordpress.org
[install-composer]: https://gist.github.com/flschaves/23190e6b1e51371a70a00a99913fce6e#file-install-composer-txt

[formatting]: {{ 'formatting-coding-standards-wordpress.gif' | prepend: 'assets/images/posts/' | relative_url }} "Formatting code in Visual Studio Code with WordPress Coding Standards"