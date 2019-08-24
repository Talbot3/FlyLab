# GStream

> want you play funny

## 开发环境安装

> 以MacOS为例

```bash
brew install gstreamer gst-plugins-base gst-plugins-good gst-plugins-bad gst-libav;
# [ISSUE `Package 'libffi', required by 'gobject-2.0', not found`](https://github.com/otrv4/pidgin-otrng/issues/104)
export PKG_CONFIG_PATH="/usr/local/opt/libffi/lib/pkgconfig";
```

## Gstream 概念

```bash
引入了许多概念，相关文档可以参考 `docs/pdfs/Gstreamermanual.157392612.pdf`
```

## 参考

- [gstream tutorial](https://gstreamer.freedesktop.org/documentation/tutorials/basic/dynamic-pipelines.html?gi-language=c)